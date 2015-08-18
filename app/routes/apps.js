import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [ 'Facebook', 'Instagram', 'Twitter', 'Pinterest' ];
  }
});
