const { defineConfig } = require('cypress');
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

exports.default = defineConfig({
   e2e: {
     baseUrl: 'site_url_to_test',
     specPattern: 'cypress/tests/**/*.spec.(js|ts)',
     setupNodeEvents(on, config) {

     // Add the Match Image Snapshot plugin to Cypress
     addMatchImageSnapshotPlugin(on, config);

     // Define browser-specific viewport sizes
     on('before:browser:launch', (browser = {}, launchOptions) => {
         if (browser.name === 'electron' && browser.isHeadless) {
           launchOptions.preferences['width'] = 1440;
           launchOptions.preferences['height'] = 900;
           launchOptions.preferences['resizable'] = false;
         }
         if (browser.name === 'chrome' && browser.isHeadless) {
           launchOptions.args.push('--window-size=1440,900');
         }
         if (browser.name === 'firefox' && browser.isHeadless) {
           launchOptions.args.push('--width=1440');
           launchOptions.args.push('--height=900');
         }
         return launchOptions;
     });
   },
 },
 video: false,
 viewportWidth: 1440,
 viewportHeight: 900,
 env: {
   // site login credentials
   username: 'login_username',
   password: 'login_password',
 }
});
