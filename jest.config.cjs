module.exports = {
  // ...
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFiles: ['./jest.setup.js'],  // path to your jest setup file
  // ...
};
