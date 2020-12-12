module.exports = {
  ci: {
    collect: {
      url: ['/'],
      staticDistDir: './dist',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
