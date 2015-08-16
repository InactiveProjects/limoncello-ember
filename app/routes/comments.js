import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('comment');
  },

  actions: {

    save(model) {
      model.save().then(() => {
          this.transitionTo('comments.list');
        },
        (reason) => {
          console.error(reason);
        });
    },

    cancel(model) {
      model.rollbackAttributes();
      this.transitionTo('comments.list');
    },

    delete(model) {
      model.deleteRecord();
      model.save().then(() => {
          this.transitionTo('comments.list');
        },
        (reason) => {
          console.log(reason);
        });
    }

  }

});
