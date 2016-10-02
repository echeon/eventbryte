## Component Hierarchy

### Root
  - Navbar
  - WelcomeScreen
  - EventIndex

### AuthFormContainer
  - AuthForm

### EventFormContainer
  - Navbar
  - EventForms

### EventForms
  - EventDetailForm
  - EventTicketsForm
  - EventTypeForm
  - SaveButton

### EventsContainer
  - EventIndex

### EventIndex
  - EventIndexItem
    * EventDetail
    * Tags
    * Map

### ManageEventsContainer
  - EventIndex

### BrowseContainer
  - BrowseSelector
  - BrowseResults
    * EventIndex

### UserContainer
  - Navbar
  - UpcomingEvents
    * EventIndex
  - SavedEvents
    * EventIndex
  - PastEvents
    * EventIndex


## Routes

 Path                      | Component
---------------------------|-------------------------
 "/"                       | "Root"
 "/login "                 | "AuthFormContainer"
 "/signup"                 | "AuthFormContainer"
 "/events/create"          | "EventFormContainer"
 "/events/:eventId/edit"   | "EventFormContainer"
 "/events/:eventId"        | "EventsContainer"
 "/events/manage"          | "ManageEventsContainer"
 "/browse"                 | "BrowseContainer"
 "/users/:userId"          | "UserContainer"
