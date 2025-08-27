// Karma configuration file
// https://karma-runner.github.io/1.0/config/configuration-file.html

import { join } from 'path';
import karmaJasmine from 'karma-jasmine';
import karmaChromeLauncher from 'karma-chrome-launcher';
import karmaJasmineHtmlReporter from 'karma-jasmine-html-reporter';
import karmaCoverage from 'karma-coverage';
import { default as angularKarma } from '@angular-devkit/build-angular/plugins/karma/index.js';

export default function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      karmaJasmine,
      karmaChromeLauncher,
      karmaJasmineHtmlReporter,
      karmaCoverage,
      angularKarma,
    ],
    client: {
      clearContext: false,
    },
    coverageReporter: {
      dir: join(process.cwd(), './coverage/convertrix'),
      subdir: '.',
      reporters: [
        {
          type: 'html',
        },
        {
          type: 'text-summary',
        },
      ],
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
  });
}
