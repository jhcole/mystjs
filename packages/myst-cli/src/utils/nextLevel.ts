import type { PageLevels } from '../project/types';

export function nextLevel(level: PageLevels): PageLevels {
  return (level < 5 ? level + 1 : 6) as PageLevels;
}
