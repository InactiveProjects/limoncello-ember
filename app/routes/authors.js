import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

const ROUTE_AUTHORS_LIST = 'authors.list';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model() {
    return this.store.findAll('author');
  },

  actions: {

    save(model) {
      model.save().then(() => {
          this.transitionTo(ROUTE_AUTHORS_LIST);
        },
        (reason) => {
          console.error(reason);
        });
    },

    cancel(model) {
      model.rollbackAttributes();
      this.transitionTo(ROUTE_AUTHORS_LIST);
    },

    delete(model) {
      model.deleteRecord();
      model.save().then(() => {
          this.transitionTo(ROUTE_AUTHORS_LIST);
        },
        (reason) => {
          console.log(reason);
        });
    }

  }

});
