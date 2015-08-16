import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('user');
  },

  actions: {

    save(model) {
      model.save().then(() => {
          this.transitionTo('users.list');
        },
        (reason) => {
          console.error(reason);
        });
    },

    cancel(model) {
      model.rollbackAttributes();
      this.transitionTo('users.list');
    },

    delete(model) {
      model.deleteRecord();
      model.save().then(() => {
          this.transitionTo('users.list');
        },
        (reason) => {
          console.log(reason);
        });
    }

  }

});
