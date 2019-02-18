import Ember from 'ember';

var Config = Ember.Object.extend();

Config.reopenClass({
  load(config = {}) {
    for (let property in config) {
      if (this.hasOwnProperty(property) && typeof this[property] !== 'function') {
        this[property] = config[property];
      }
    }
  }
});

export default Config;
