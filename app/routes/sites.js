import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

const ROUTE_SITES_LIST = 'sites.list';

const errorHandler = (reason) => {
  Ember.Logger.error('Error:', reason.errors);
};

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model() {
    return this.store.findAll('site');
  },

  actions: {

    save(model) {
      model.save().then(() => {
          this.transitionTo(ROUTE_SITES_LIST);
        }, errorHandler);
    },

    cancel(model) {
      model.rollbackAttributes();
      this.transitionTo(ROUTE_SITES_LIST);
    },

    delete(model) {
      model.deleteRecord();
      model.save()
        .then(() => {
          this.transitionTo(ROUTE_SITES_LIST);
        }, errorHandler);
    }

  }

});
