import Ember from 'ember';

export default Ember.Controller.extend({
  isEdit: false,

  actions: {
    save() {
      this.get('model').save().then(() => {
        alert('saved!');
      });
    },

    toggleEdit() {
      this.toggleProperty('isEdit');
    }
  }
});