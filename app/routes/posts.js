import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('post');
  },

  actions: {

    save(model) {
      model.save().then(() => {
          this.transitionTo('posts.list');
        },
        (reason) => {
          console.error(reason);
        });
    },

    cancel(model) {
      model.rollbackAttributes();
      this.transitionTo('posts.list');
    },

    delete(model) {
      model.deleteRecord();
      model.save().then(() => {
          this.transitionTo('posts.list');
        },
        (reason) => {
          console.log(reason);
        });
    }

  }

});
