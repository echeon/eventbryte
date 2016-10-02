```js
{
  currentUser: {
    id: 1,
    username: "app-academy",
    tickets: {
      1: {
        event_id: 1,
        ticket_id: 1
      }
    },
    events: [ ...event_ids ],
    bookmarks: [ ...event_ids ]
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: ["invalid username and/or password"]},
    createEvent: {errors: ["title can't be blank"]}
  },
  events: {
    1: {
      author_id: 1
      title: "Party Time",
      location: {
        name: "AppAcademy",
        address: "598 Broadway",
        address2: "6th Floor",
        city: "New York",
        state: "NY",
        zip: "10012",
        country: "United States"
      }
      time: {
        startDate: "2016-12-31",
        startTime: "22:00PM",
        endDate: "2017-01-01",
        endTime: "4:00AM",
      }
      image_url: "#",
      description: "Happy New Year",
      tickets: {
        1: {
          name: "Early Bird",
          quantity: 100,
          price: 5
        }
      },
      type: 1, // e.g. "Things To Do"
      category: 3, // e.g. "Music"
      sub_category 5 // e.g. "Pop"
    }
  }
}
```
