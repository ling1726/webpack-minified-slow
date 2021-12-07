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

    entry: './index.fast.js',
    output: {
      filename: 'fast.js',
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