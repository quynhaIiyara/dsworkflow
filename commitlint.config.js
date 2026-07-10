module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'perf', 'refactor', 'docs', 'test', 'chore', 'ci', 'build', 'revert'],
    ],
    'scope-enum': [
      2,
      'always',
      ['components', 'tokens', 'icons', 'skills', 'mcp', 'ci', 'deps', 'release', 'repo'],
    ],
    'scope-empty': [2, 'never'],
    'subject-case': [0],
    'header-max-length': [2, 'always', 100],
  },
};
