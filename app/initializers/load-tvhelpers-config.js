import ENV from '../config/environment';
import Config from 'ember-cli-tvhelpers/config';

export function initialize(/* container, application */) {
  Config.load(ENV['ember-cli-tvhelpers'] || {});
}

export default {
  name: 'load-tvhelpers-config',
  initialize
};
