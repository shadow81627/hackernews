module.exports = {
  ci: {
    collect: {
      url: ['/'],
      staticDistDir: './dist',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'content-width': 'warn',
        'non-composited-animations': 'warn',
        'unused-css-rules': 'warn',
        'unused-javascript': 'warn',
        'uses-rel-preconnect': 'warn',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
