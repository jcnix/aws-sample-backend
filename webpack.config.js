module.exports = {
  entry: ['./src/index.js'],
  mode: 'production',
  target: 'node',
  output: {
    path: `${process.cwd()}/bin`,
    filename: 'app.js',
    libraryTarget: 'umd'
  }
};
