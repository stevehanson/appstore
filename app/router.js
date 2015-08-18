import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('apps', function() {
    this.route('show');
  });
  this.route('settings');
});

export default Router;
