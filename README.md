# Eventbryte

[Eventbryte Live](http://eventbryte.herokuapp.com/)


## Minimum Viable Product

Eventbryte is a full-stack web application inspired by [Eventbrite](http://www.eventbrite.com). It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Events
- [ ] Registration / Tickets
- [ ] Categories
- [ ] Bookmark events
- [ ] [Production README](#)


## Design Docs
* [Wireframes](docs/wireframes)
* [React Components](docs/component-hierarchy.md)
* [Sample State](docs/sample-state.md)
* [Redux Architecture](docs/redux-structure.md)
* [DB Schema](docs/schema.md)
* [API Endpoints](docs/api-endpoints.md)


## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [x] New Rails project
- [x] `User` model/migration
- [x] Back end authentication (session/password)
- [x] `StaticPages` controller and root view
- [x] Webpack & react/redux modules
- [x] `APIUtil` to interact with the API
- [x] Redux cycle for frontend authentication
- [x] User signup/signin components
- [x] Blank landing component after signup/login
- [ ] Blank landing component after logout
- [x] Style signup/signin components
- [x] Style navbar component'
- [ ] error message for login/signup
- [ ] Style welcome screen for root view
- [ ] Add slideshow for the home screen
- [ ] Seed users
- [ ] Review phase 1


### Phase 2: Events Model, API, and components (2 days)

**Objective:** Events can be created, read, edited and destroyed through the API.

- [ ] `Event` model
- [ ] Seed database with a small amount of test event data
- [ ] CRUD API for events (EventsController)
- [ ] JBuilder views for events
- [ ] Event components and respective redux loops
  - [ ] `EventsIndex`
  - [ ] `EventIndexItem`
  - [ ] `EventForm`
- [ ] Style event components
- [ ] Seed database with types/categories/subcategories
- [ ] Create event
- [ ] Review phase 2


### Phase 3: Categories, bookmarks, and tickets (2 days)

**Objective:** Events are created with types, categories, subcategories, and tickets. Users can also bookmark events.

- [ ] Modify `EventForm` so users can select correct type and categories
- [ ] Add bookmark button
- [ ] Seed database with types, categories, subcategories, and bookmarks
- [ ] Add ticket-adding feature to `EventForm`
- [ ] Create user profile pages
  - [ ] `UpcomingEvents` pane
  - [ ] `SavedEvents` pane
  - [ ] `PastEvents` pane
- [ ] Style user profile page
- [ ] Update event component accordingly
- [ ] Style added features for event


### Phase 4: More Tickets (1 days)

**Objective:** Users can register or purchase tickets and can view them on their profiles.

- [ ] Add register or purchase ticket button to `EventContainer`
- [ ] Style tickets component
- [ ] Seed events with tickets info
- [ ] Seed registered tickets
- [ ] Review ticketing feature:
  - [ ] Works with limited number of tickets?
  - [ ] Tickets are added to users correctly?
  - [ ] User profile shows upcoming events and past events with no problem?
- [ ] Review the styling up to phase 4
- [ ] Review phase 3 and phase 4


### Phase 5: Browse (2 days)

- [ ] Add geolocation feature to get the city and state
- [ ] Show events in local area by default
- [ ] Add filters
  - [ ] Category & Subcategory
  - [ ] Price
  - [ ] Date
  - [ ] Type
- [ ] Add `order by price` and `order by date` feature
- [ ] Style browse page
- [ ] Make sure all browse event buttons are working from different pages
- [ ] Review phase 5


## Bonus Features (if time allows)
- [ ] Google Map API
- [ ] Responsive web design
- [ ] Search event
- [ ] Search by area in the map
- [ ] Share with friends feature via facebook/twitter/email
