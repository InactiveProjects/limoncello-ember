import Ember from 'ember';

export default Ember.Route.extend({

  templateName: 'sites.edit',

  model() {
    return this.store.createRecord('site');
  }

});
