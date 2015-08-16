import Ember from 'ember';

export default Ember.Route.extend({

  templateName: 'posts.edit',

  model() {
    return this.store.createRecord('post');
  }

});
