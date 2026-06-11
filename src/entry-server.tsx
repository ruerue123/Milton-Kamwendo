import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './App';

/**
 * Server entry used only at build time by scripts/prerender.mjs.
 * Renders the full app for a given route to an HTML string so that
 * crawlers and AI bots receive real, readable content without running JS.
 */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
