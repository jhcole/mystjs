import type { VFileMessage } from 'vfile-message';

export type ExternalLinkResult = {
  url: string;
  ok?: boolean;
  skipped?: boolean;
  status?: number;
  statusText?: string;
};

export type WarningKind = 'error' | 'warn' | 'info';

export type BuildWarning = {
  message: string;
  kind: WarningKind;
  note?: string | null;
  url?: string | null;
  position?: VFileMessage['position'];
};
