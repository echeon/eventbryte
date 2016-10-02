# Redux Structure


## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `AuthForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `AuthForm` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.


## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.


## Event Cycles

### Events API Request Actions

* `fetchAllEvents`
  0. invoked from `EventIndex` `didMount`/`willReceiveProps`
  0. `GET /api/events` is called.
  0. `receiveAllEvents` is set as the success callback.

* `fetchEvent`
  0. invoked from `EventDetail` `didMount`/`willReceiveProps`
  0. `GET /api/events/:id` is called.
  0. `receiveEvent` is set as the success callback.

* `createEvent`
  0. invoked from create event button `onClick`
  0. `POST /api/events` is called.
  0. `receiveEvent` is set as the success callback.

* `updateEvent`
  0. invoked from edit button `onClick`
  0. `PATCH /api/event/:id` is called.
  0. `receiveEvent` is set as the success callback.

* `destroyEvent`
  0. invoked from delete button `onClick`
  0. `DELETE /api/event/:id/` is called.
  0. `removeEvent` is set as the success callback.

### Events API Response Actions

* `receiveAllEvents`
  0. invoked from an API callback
  0. the `EventReducer` updates `events` in the application's state.

* `receiveEvent`
  0. invoked from an API callback
  0. the `EventReducer` updates `events[id]` in the application's state.

* `removeEvent`
  0. invoked from an API callback
  0. the `EventReducer` removes `events[id]` in the application's state.
