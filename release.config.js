module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { scope: 'no-release', release: false },
          { scope: 'breaking', release: 'major' },

          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'docs', scope: 'README', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'test', release: false },
          { type: 'revert', release: 'patch' },

          { type: 'chore', release: false },
          { type: 'ci', release: false },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            /**
             * @see
             * https://github.com/semantic-release/release-notes-generator
             * https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.0.0/README.md
             */
            { type: 'feat', section: '✨ Features', hidden: false },
            { type: 'fix', section: '🐛 Bug Fixes', hidden: false },
            { type: 'docs', section: '📝 Docs', hidden: false },
            { type: 'style', section: '💄 Styles', hidden: false },
            { type: 'refactor', section: '♻️ Refactor', hidden: false },
            { type: 'revert', section: '🕐 Reverts', hidden: false },
            { type: 'ci', section: '💫 CI/CD', hidden: false },

            { type: 'test', section: '✅ Tests', hidden: true },
            { type: 'chore', section: '📦 Chores', hidden: true },
          ],
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# 🚦 CHANGELOG',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md'],
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: [{ path: 'CHANGELOG.md', label: 'Changelog' }],
      },
    ],
  ],
}
