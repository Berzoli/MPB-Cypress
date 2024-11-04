const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ezhvs7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
