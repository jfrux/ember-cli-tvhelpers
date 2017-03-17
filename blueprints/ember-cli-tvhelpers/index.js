/* eslint-env node */
'use strict';

const rsvp = require('rsvp');
const fs = require('fs');
const path = require('path');
const writeFile = rsvp.denodeify(fs.writeFile);
const chalk = require('chalk');

/*
They currently aren't tagging releases and making this as a bower package yet, so we will just have to pull the latest and greatest for now.
In the future if they ever decide to move `tvjs` into a bower package then we can update this.
*/
const tvHelpersVersion = 'https://github.com/Microsoft/TVHelpers.git';

module.exports = {
  normalizeEntityName() {
  },

  afterInstall() {
    return this.addDependencies();
  },

  addDependencies() {
    // let dependencies = this.project.dependencies();
    let promises = [];
    promises.push(this.addBowerPackageToProject('TVHelpers', tvHelpersVersion));

    return rsvp.all(promises);
  }
};
