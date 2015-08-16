import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('site');
  },

  actions: {

    save(model) {
      model.save().then(() => {
          this.transitionTo('sites.list');
        },
        (reason) => {
          console.error(reason);
        });
    },

    cancel(model) {
      model.rollbackAttributes();
      this.transitionTo('sites.list');
    },

    delete(model) {
      model.deleteRecord();
      model.save().then(() => {
          this.transitionTo('sites.list');
        },
        (reason) => {
          console.log(reason);
        });
    }

  }

});
