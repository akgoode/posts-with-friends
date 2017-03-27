import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  model () {
    if(this.get('isAuthenticated')) {
      return this.get('store').findAll('post');
    } else {
      this.transitionTo('index');
    }
  },
  actions: {
    deletePost(post) {
      post.destroyRecord();
    },
  }
});
