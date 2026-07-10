/* eslint-disable no-template-curly-in-string */
const pkgName = '@rn-ds/tokens';
const srcRoot = 'packages/tokens';

module.exports = {
  branches: ['main'],
  tagFormat: `${pkgName}-v\${version}`,
  pkgRoot: '.',
  // Only fire if this package's files changed since the last tag.
  commitPaths: [`${srcRoot}/**`],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits' }],
    ['@semantic-release/release-notes-generator', { preset: 'conventionalcommits' }],
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
    ['@semantic-release/github', {
      // Attach the built tarball as a release asset — this is the
      // consumer's install source until we wire up an npm registry.
      assets: [{ path: '*.tgz', label: 'tokens tarball' }],
    }],
    ['@semantic-release/git', {
      assets: ['package.json', 'CHANGELOG.md'],
      message:
        `chore(release): ${pkgName} \${nextRelease.version} [skip ci]\n\n\${nextRelease.notes}`,
    }],
  ],
};
