import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('sites', function() {
    this.route('list', { path: '/' });
    this.route('new');
    this.route('edit', { path: '/:site_id/edit' });
  });

  this.route('authors', function() {
    this.route('list', { path: '/' });
    this.route('new');
    this.route('edit', { path: '/:author_id/edit' });
  });

  this.route('comments', function() {
    this.route('list', { path: '/' });
    this.route('new');
    this.route('edit', { path: '/:comment_id/edit' });
  });

  this.route('posts', function() {
    this.route('list', { path: '/' });
    this.route('new');
    this.route('edit', { path: '/:post_id/edit' });
  });

  this.route('users', function() {
    this.route('list', { path: '/' });
    this.route('new');
    this.route('edit', { path: '/:user_id/edit' });
  });

  this.route('login');

});

export default Router;
