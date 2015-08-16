import Ember from 'ember';

export default Ember.Route.extend({

  templateName: 'users.edit',

  model() {
    return this.store.createRecord('user');
  }

});
