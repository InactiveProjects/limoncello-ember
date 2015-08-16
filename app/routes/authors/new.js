import Ember from 'ember';

export default Ember.Route.extend({

  templateName: 'authors.edit',

  model() {
    return this.store.createRecord('author');
  }

});
