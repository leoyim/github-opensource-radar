import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
import { DATA_DIR } from './load';

/**
 * 逐项详细解读：上游 data/interpretations/<date>/<owner>__<name>.md，
 * 由 tools/ingest.mjs 原样搬进 _data/interpretations/，这里只负责剥壳与渲染。
 * 构建期完成，产物里是纯 HTML，不引入任何客户端依赖。
 */

const DIR = path.join(DATA_DIR, 'interpretations');

export type Interpretation = {
  html: string;
  /** 正文字数，用于按钮上的「约 N 字」 */
  chars: number;
};

const cache = new Map<string, Interpretation | null>();

const readText = (file: string): string | null => {
  try {
    return fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  } catch {
    return null;
  }
};

/**
 * 上游文件里有一部分与站点已有信息重复：frontmatter、H1 标题、开头的「指标」表、
 * 结尾的 <sub> 署名。剥掉它们，避免同一页出现两套互相打架的数字。
 * 哪一段没匹配上就原样留着，不猜测、不报错。
 */
function bodyOf(md: string): string {
  let s = md.replace(/^---\n[\s\S]*?\n---\n/, '');
  s = s.trimStart();
  s = s.replace(/^#\s+.*\n+/, '');
  s = s.replace(/<sub>[\s\S]*?<\/sub>\s*$/, '');

  const lines = s.split('\n');
  const kept: string[] = [];
  let droppedTable = false;
  for (let i = 0; i < lines.length; i++) {
    if (!droppedTable && /^\|\s*指标\s*\|/.test(lines[i])) {
      while (i < lines.length && lines[i].trim().startsWith('|')) i++;
      droppedTable = true;
      i -= 1;
      continue;
    }
    kept.push(lines[i]);
  }
  return kept.join('\n').trim();
}

/** 粗算正文字数：去掉标记符号与空白后的字符数，取整到百位后再展示 */
const countChars = (body: string): number =>
  body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/[#>*`|_~\-[\]()!]/g, '')
    .replace(/\s+/g, '').length;

const render = (md: string): string => marked.parse(md, { async: false, gfm: true }) as string;

export function interpretationOf(date: string, fullName: string): Interpretation | null {
  const key = `${date}/${fullName}`;
  if (cache.has(key)) return cache.get(key) ?? null;

  const md = readText(path.join(DIR, date, `${fullName.replace('/', '__')}.md`));
  if (!md) {
    cache.set(key, null);
    return null;
  }

  const body = bodyOf(md);
  const result: Interpretation = { html: render(body), chars: countChars(body) };
  cache.set(key, result);
  return result;
}

/** 取出 index.md 里的某一节（从 `## 标题` 到下一个 `## ` 之前） */
function sectionOf(md: string, title: string): string | null {
  const lines = md.split('\n');
  const start = lines.findIndex((l) => l.trim() === `## ${title}`);
  if (start < 0) return null;
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) {
    if (/^##\s/.test(lines[i])) {
      end = i;
      break;
    }
  }
  return lines.slice(start + 1, end).join('\n').trim() || null;
}

/** 本期观察：整期的横向分析，放在正文末尾，作为收束 */
export function observationOf(date: string): string | null {
  const md = readText(path.join(DIR, date, 'index.md'));
  if (!md) return null;
  const section = sectionOf(md, '本期横向观察');
  return section ? render(section) : null;
}
