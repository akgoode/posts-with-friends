import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('posts');
  this.route('new');
  this.route('post', { path: '/posts/:post_id' });
  this.route('edit', { path: '/posts/:post_id/edit'});
  this.route('unauthorized');
});

export default Router;
