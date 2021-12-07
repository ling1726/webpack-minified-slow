module.exports = {
    name: 'client',
    target: 'web',
    mode: 'production',

    cache: {
      type: 'memory',
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },

    entry: './index.slow.js',
    output: {
      filename: 'slow.js',
    },
    performance: {
      hints: false,
    },
    optimization: {
      minimize: false,
      minimizer: [],
    },
    stats: {
      optimizationBailout: true,
    },
    parallelism: 1,
    profile: true
  };