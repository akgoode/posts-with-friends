import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  userId: JSON.parse(window.localStorage.getItem('storage:auth')).id,
  title: DS.attr('string'),
  content: DS.attr('string'),
  user: DS.belongsTo('user'),
  belongsToUser: Ember.computed('userId', 'user', function () {
    if (this.get('userId') === this.get('user')) {
      return true;
    }
    console.log(this.get('userId'));
    console.log(this.get('user'));
    return false;
  })
});
