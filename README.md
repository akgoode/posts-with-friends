# Posts With Friends

#### by Andrew Goode

## Setup

1.  Fork and clone this repo.
2.  Run `npm install && bower install`.
3.  Clone [posts-with-friends-api](https://github.com/akgoode/posts-with-friends-api) and follow the instructions to setup the API.
4.  Start the api with `bin/rails server`
5.  Start the client with `ember server`

## Links

#### Deployed App:
https://akgoode.github.io/posts-with-friends/
#### Back-end repo:
https://github.com/akgoode/posts-with-friends-api
#### Deployed back-end:
https://still-shelf-67479.herokuapp.com/

## Overview

Posts with friends is the beginning of a full-stack social media app built with ember and ruby on rails.

<a href="https://prezi.com/embed/zvhns0uf5kgq/?bgcolor=ffffff&amp;lock_to_path=0&amp;autoplay=0&amp;autohide_ctrls=0&amp;landing_data=bHVZZmNaNDBIWnNjdEVENDRhZDFNZGNIUE43MHdLNWpsdFJLb2ZHanI5NlBFSFRGSlcxNVNEclJqYlJFelc5WnF3PT0&amp;landing_sign=CA9-tMGvpBJDMMHMKBshvuEWJ-mSLkYen_wVvURPmzg">Prezi</a>

#### Functionality

Users create accounts and can then create posts which belong to those accounts.  They can view posts created by all users, but are limited to changing or deleting posts that they own.  The news feed button shows users all the posts created by all users, which is my prototype for a news feed that will show the activity of users that are followed by the signed-in user.  The myposts tab shows all of the current user's activity, which is the prototype for a user profile page.

#### Goals

My personal goal for this project was to create a functional, visually appealing front-end in Ember.  Even though Ember was not a technical requirement, I approached this project as though it was because I was not interested in making an app that I had the technical skills to make six weeks ago.  To me, one of the most important abilities that I can highlight as a developer is that I can take new languages or frameworks and use them to quickly produce a functional app.  My timeline in WDI shows that 10 weeks ago I learned how to manipulate the DOM in JQuery, and today I have an app created using Ember.

#### Planning and Scope

When I began planning this project I scoped out what I thought would be produceable by 3/31.  I quickly realized that while this was not attainable in that amount of time, that I would use that model as a stretch goal.  As a result I descoped my project to a much simpler one.  My initial plan is one that I hope to be near to achieving by the meet and hire, and that the project that I will submit will be a stepping stone to my eventual goals.

#### Challenges Faced

The biggest challenge I faced with this project was scoping it properly.  To compensate for this, I made sure that I was going into the weekend before project week with working repos and deployed apps so that I could start work on my front end and comfortably deliver what I scoped.

My other challenge was gaining confidence with Ember.  I left GA on Friday of Ember training week somewhat shaky about my abilities with Ember, but through work over the weekend and a more thorough understanding of routes and components on Monday I think my Ember skills have increased dramatically.

## Posts-With-Friends
<img src="https://s3.amazonaws.com/akgoode/posts-with-friends.png">

## Technologies

##### Front-end
- Ember + handlebars
- Bootstrap
- Sass/CSS

##### Back-end
- Ruby on Rails
- PSQL database

## Wireframes and User Stories

http://imgur.com/J1PhHgj

User Stories:
- As a user, I want to have an account.
- I want to create posts that belong to my account
- I want to be able to view all posts.
- I want to be able to update MY posts.
- I want to be able to delete MY posts.
- I don't want any routes to be accessible unless signed in.
