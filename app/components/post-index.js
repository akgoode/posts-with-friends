import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost () {
      this.sendAction('deletePost', this.get('post'));
    }
  }
});
