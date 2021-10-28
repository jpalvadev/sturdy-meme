import React from 'react';
import styles from './EventList.module.css';

export default function EventList({ events, handleClick }) {
  return (
    <div>
      {events.map((event) => (
        <div className={styles.card} key={event.id}>
          <h2>{event.title}</h2>
          <p>{event.date}</p>
          <button onClick={() => handleClick(event.id)}>Delete event</button>
        </div>
      ))}
    </div>
  );
}
