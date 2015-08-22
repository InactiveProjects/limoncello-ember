import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

const ROUTE_POSTS_LIST = 'posts.list';

const errorHandler = (reason) => {
  Ember.Logger.error('Error:', reason.errors);
};

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model() {
    return this.store.findAll('post');
  },

  actions: {

    save(model) {
      model
        .post
          .set('site', model.selectedSite)
          .set('author', model.selectedAuthor)
          .save()
          .then(() => {
            this.transitionTo(ROUTE_POSTS_LIST);
          }, errorHandler);
    },

    cancel(model) {
      model.post.rollbackAttributes();
      this.transitionTo(ROUTE_POSTS_LIST);
    },

    delete(model) {
      model.post.deleteRecord();
      model.post.save().then(() => {
        this.transitionTo(ROUTE_POSTS_LIST);
      }, errorHandler);
    }

  }

});
