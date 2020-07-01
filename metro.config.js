const path = require('path');

const stream = path.join(__dirname, './node_modules/stream-browserify');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules: Object.assign({}, require('node-libs-react-native'), {
      stream,
    }),
  },
};
