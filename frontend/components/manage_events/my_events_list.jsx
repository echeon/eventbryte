import React from 'react';
import MyEventsListItem from './my_events_list_item';

const MyEventsList = ({ myEvents, destroyEvent }) => {
  const myEventsIndex = myEvents.map(myEvent => {
    return <MyEventsListItem myEvent={myEvent}
                             destroyEvent={destroyEvent}
                             key={myEvent.id}/>;
  });

  return (
    <div>
      {myEventsIndex}
    </div>
  );
};

export default MyEventsList;
