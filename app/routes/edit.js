import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  model (params) {
    if(this.get('isAuthenticated')){
      return this.get('store').findRecord('post', params.post_id);
    } else {
      this.transitionTo('index');
    }
  },
  actions: {
    editPost (post) {
      post.save()
      .then(() => this.transitionTo('posts'));
    },
    cancel () {
      history.back();
    }
  }
});
