import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

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
