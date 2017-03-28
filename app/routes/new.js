import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  model () {
    if(this.get('isAuthenticated')){
      return this.get('store').createRecord('post');
    } else {
      this.transitionTo('index');
    }
  },
  actions: {
    createPost (post) {
      post.save()
        .then(() => this.transitionTo('posts'));
    },
    cancel () {
      history.back();
    }
  }
});
