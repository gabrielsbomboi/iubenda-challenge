const path = require('path');

module.exports = function(config) {
  config.set({
    frameworks: ['vite', 'jasmine'],
    files: [
        {
            pattern: 'tests/**/*.spec.js',
            type: 'module',
            watched: false,
            served:  false
        }
    ],
    vite: {
        configFile: path.resolve(__dirname, 'vite.config.js'),
        useImportMeta: true,
        coverage: { include: ['src/**/*.js'] }
    },
    reporters: ['progress'],
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};