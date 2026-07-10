/* eslint-disable no-template-curly-in-string */
const pkgName = '@rn-ds/components';
const srcRoot = 'packages/components';

module.exports = {
  branches: ['main'],
  tagFormat: `${pkgName}-v\${version}`,
  pkgRoot: '.',
  commitPaths: [`${srcRoot}/**`],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits' }],
    ['@semantic-release/release-notes-generator', { preset: 'conventionalcommits' }],
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
    ['@semantic-release/github', {
      assets: [{ path: '*.tgz', label: 'components tarball' }],
    }],
    ['@semantic-release/git', {
      assets: ['package.json', 'CHANGELOG.md'],
      message:
        `chore(release): ${pkgName} \${nextRelease.version} [skip ci]\n\n\${nextRelease.notes}`,
    }],
  ],
};
