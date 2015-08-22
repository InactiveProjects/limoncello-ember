import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

const ROUTE_COMMENTS_LIST = 'comments.list';

const errorHandler = (reason) => {
  Ember.Logger.error('Error:', reason.errors);
};

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model() {
    return this.store.findAll('comment');
  },

  actions: {
    save(model) {
      model
        .comment
          .set('post', model.selectedPost)
          .save()
          .then(() => {
            this.transitionTo(ROUTE_COMMENTS_LIST);
          }, errorHandler);
    },

    cancel(model) {
      model.comment.rollbackAttributes();
      this.transitionTo(ROUTE_COMMENTS_LIST);
    },

    delete(model) {
      model.comment.deleteRecord();
      model.comment.save().then(() => {
          this.transitionTo(ROUTE_COMMENTS_LIST);
        }, errorHandler);
    }

  }

});
