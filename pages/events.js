import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';

export default function Events({ eventList }) {
  const router = useRouter();
  const [events, setEvents] = React.useState(eventList);

  const fetchSportsEvents = async () => {
    const response = await axios.get(
      `http://localhost:4000/events?category=sports`
    );
    const data = response.data;
    setEvents(data);
    router.push('/events?category=sports', undefined, { shallow: true });
  };

  return (
    <div>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of Events</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const {
    query: { category },
  } = context;
  const queryString = category ? 'category=sports' : '';
  const response = await axios.get(
    `http://localhost:4000/events?${queryString}`
  );
  const data = response.data;

  return {
    props: {
      eventList: data,
    },
  };
}
