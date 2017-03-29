import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  model (params) {
    let post = this.get('store').findRecord('post', params.post_id);
    if(this.get('isAuthenticated') && post.get('editable')){
      return post;
    } else {
      this.transitionTo('unauthorized');
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
