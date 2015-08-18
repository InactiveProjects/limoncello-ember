import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model() {
    return this.store.findAll('author');
  },

  actions: {

    save(model) {
      model.save().then(() => {
          this.transitionTo('authors.list');
        },
        (reason) => {
          console.error(reason);
        });
    },

    cancel(model) {
      model.rollbackAttributes();
      this.transitionTo('authors.list');
    },

    delete(model) {
      model.deleteRecord();
      model.save().then(() => {
          this.transitionTo('authors.list');
        },
        (reason) => {
          console.log(reason);
        });
    }

  }

});
