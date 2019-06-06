const {defaults} = require('jest-config');

module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['./src/setupTests.js'],
  modulePaths: ['/shared/vendor/modules'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'css'],
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],

  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  },

  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/", "<rootDir>/cypress/"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/cypress/"
  ],
  collectCoverage: true,
  coverageReporters: ["json", "html"],
};