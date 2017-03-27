import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  userId: JSON.parse(window.localStorage.getItem('storage:auth')).id,

  model () {
    if(this.get('isAuthenticated')) {
      console.log(this.get('userId'));
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
