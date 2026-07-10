import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Vite's import.meta.glob picks up CHANGELOG.md wherever it lands under
// packages/*/. Missing files (before the first release) are silently absent —
// no build error. Eager loading = content bundled at build time, no runtime
// fetch, no CORS, no GitHub API rate limit.
const files = import.meta.glob<string>(
  '../../../../packages/*/CHANGELOG.md',
  { query: '?raw', import: 'default', eager: true },
);

function packageNameFromPath(path: string): string {
  const match = path.match(/packages\/([^/]+)/);
  return match ? `@rn-ds/${match[1]}` : path;
}

const anchor = (name: string): React.CSSProperties => ({
  scrollMarginTop: 80,
});

const packageHeader: React.CSSProperties = {
  marginTop: 32,
  paddingBottom: 8,
  borderBottom: '2px solid #EEEEF2',
};

const empty: React.CSSProperties = {
  color: '#8A8A96',
  fontStyle: 'italic',
};

export function Changelogs() {
  const entries = Object.entries(files);

  if (entries.length === 0) {
    return (
      <p style={empty}>
        No <code>CHANGELOG.md</code> files exist yet. semantic-release will
        create one per package on the first merge to <code>main</code> that
        includes a semver-relevant commit ({' '}
        <code>feat</code> / <code>fix</code> / <code>perf</code> /{' '}
        <code>BREAKING CHANGE</code>).
      </p>
    );
  }

  return (
    <div>
      {entries.map(([path, content]) => {
        const pkg = packageNameFromPath(path);
        const trimmed = content.trim();
        return (
          <section key={path} id={pkg}>
            <h2 style={{ ...packageHeader, ...anchor(pkg) }}>{pkg}</h2>
            {trimmed ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            ) : (
              <p style={empty}>
                No releases yet — the file exists but is empty.
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
}
