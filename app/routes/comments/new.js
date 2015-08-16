import Ember from 'ember';

export default Ember.Route.extend({

  templateName: 'comments.edit',

  model() {
    return this.store.createRecord('comment');
  }

});
