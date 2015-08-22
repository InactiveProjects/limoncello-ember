import Ember from 'ember';

export default Ember.Route.extend({

  templateName: 'comments.edit',

  model(params) {
    return Ember.RSVP.hash({
      comment: this.store.peekRecord('comment', params.comment_id),
      posts: this.store.findAll('post')
    }).then(function (hash) {
      hash.selectedPost = hash.comment.get('post');

      return Ember.RSVP.hash(hash);
    });
  },

  actions: {
    selectPost(post) {
      this.controller.set('model.selectedPost', post);
      this.controller.set('model.relationshipsDirty', true);
    }
  }

});
