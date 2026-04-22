import { useEffect } from 'react';

const DEFAULT_TITLE = 'Milton Kamwendo — Keynote Speaker, Strategist, Author';
const DEFAULT_DESCRIPTION =
  'Milton Kamwendo delivers transformation through thought, strategy, and action — empowering leaders and organizations to achieve greatness.';

function setMetaContent(selector: string, content: string) {
  const el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (el) el.content = content;
}

export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Milton Kamwendo` : DEFAULT_TITLE;
    const desc = description ?? DEFAULT_DESCRIPTION;
    setMetaContent('meta[name="description"]', desc);
    setMetaContent('meta[property="og:title"]', document.title);
    setMetaContent('meta[property="og:description"]', desc);
    setMetaContent('meta[name="twitter:title"]', document.title);
    setMetaContent('meta[name="twitter:description"]', desc);
  }, [title, description]);
}
