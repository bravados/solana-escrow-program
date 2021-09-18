module.exports = {
  //...
  resolve: {
    // configuration options
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      util: require.resolve('util')
    },
  }
};
