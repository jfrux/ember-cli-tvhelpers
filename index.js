/* eslint-env node */
'use strict';

var path = require('path');
var util = require('util');
var extend = util._extend;
// var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');
var stew = require('broccoli-stew');
var mv = stew.mv;
// var log = stew.log;
var rm = stew.rm;
var chalk = require('chalk');

var defaultOptions = {
  'importDirectionalNavigation': false,
  'importGamepadToVK': false,
  'importMediaPlayer': false,
  'importScrollViewer': false,
  'importSearchBox': false
};

module.exports = {
  name: 'ember-cli-tvhelpers',

  included(app) {
    // workaround for https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }
    this.app = app;

    let options = extend(extend({}, defaultOptions), app.options['ember-cli-tvhelpers']);

    var vendor = this.treePaths.vendor;

    this.TVHelpersOptions = options;
    if (options.importDirectionalNavigation) {
      app.import(path.join(this.app.bowerDirectory, 'TVHelpers', 'tvjs','src','DirectionalNavigation','directionalnavigation-1.0.0.0.js'));
    }

    if (options.importMediaPlayer) {
      app.import(path.join(this.app.bowerDirectory, 'TVHelpers', 'tvjs','src','MediaPlayer','mediaplayer-1.0.0.0.js'));
    }
    // app.import(path.join(this.app.bowerDirectory, 'TVHelpers', 'tvjs','src','GamepadToVK','gamepadtokey-1.0.0.0.js'));

    // if (options.importDirectionalNavigation) {
    //
    // }
    // if (options.importGamepadToVK) {
    //   app.import("/bower_components/TVHelpers/tvjs/src/GamepadToVK/gamepadtokey-1.0.0.0.js")
    // }
    // if (options.importMediaPlayer) {
    //   app.import("/bower_components/TVHelpers/tvjs/src/MediaPlayer/mediaplayer-1.0.0.0.js")
    // }
    // if (options.importScrollViewer) {
    //   app.import("/bower_components/TVHelpers/tvjs/src/ScrollViewer/scrollviewer-1.0.0.0.js")
    // }
    // if (options.importSearchBox) {
    //   app.import("/bower_components/TVHelpers/tvjs/src/SearchBox/searchbox-1.0.0.0.js")
    // }
  },

  getTVHelpersVersion() {
    return parseInt(this.TVHelpersOptions.TVHelpersVersion);
  },

  // treeForAddon() {
  //   let tree = this._super.treeForAddon.apply(this, arguments);
    // let TVHelpersVersion = this.getTVHelpersVersion();
    // let componentsPath = 'modules/ember-cli-tvhelpers/components/';
    // tree = mv(tree, `${componentsPath}/`, componentsPath);
    // return tree; // log(tree, {output: 'tree', label: 'moved'});
  // },

  // treeForAddonTemplates() {
    // let tree = this._super.treeForAddonTemplates.apply(this, arguments);
    // let TVHelpersVersion = this.getTVHelpersVersion();
    // let templatePath = 'components/';
    // tree = mv(tree, `${templatePath}common/`, templatePath);
    // tree = mv(tree, `${templatePath}bs${bsVersion}/`, templatePath);
    // tree = rm(tree, `${templatePath}bs${otherBsVersion}/**/*`);
  //   return tree; //log(tree, {output: 'tree', label: 'moved'});
  // },

  // contentFor(type, config) {
  //   if (type === 'body-footer' && config.environment !== 'test' && this.bootstrapOptions.insertEmberWormholeElementToDom !== false) {
  //     return '<div id="ember-cli-tvhelpers-wormhole"></div>';
  //   }
  // }
};
