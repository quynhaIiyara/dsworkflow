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
      ['components', 'tokens', 'skills', 'mcp', 'ci', 'deps', 'release', 'repo', 'docs'],
    ],
    'scope-empty': [2, 'never'],
    'subject-case': [0],
    'header-max-length': [2, 'always', 100],
  },
};
