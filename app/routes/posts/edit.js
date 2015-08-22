import Ember from 'ember';

export default Ember.Route.extend({

  templateName: 'posts.edit',

  model(params) {
    return Ember.RSVP.hash({
      post: this.store.peekRecord('post', params.post_id),
      sites: this.store.findAll('site'),
      authors: this.store.findAll('author')
    }).then(function (hash) {
      hash.selectedSite = hash.post.get('site');
      hash.selectedAuthor = hash.post.get('author');

      return Ember.RSVP.hash(hash);
    });
  },

  actions: {
    selectSite(site) {
      this.controller.set('model.selectedSite', site);
      this.controller.set('model.relationshipsDirty', true);
    },
    selectAuthor(author) {
      this.controller.set('model.selectedAuthor', author);
      this.controller.set('model.relationshipsDirty', true);
    }
  }

});
