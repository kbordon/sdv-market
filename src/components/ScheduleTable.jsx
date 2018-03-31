import React from 'react';
import ScheduleRow from './ScheduleRow';

function ScheduleTable() {
  const marketSchedule = [  
    {  
      day: 'Sunday',
      location: 'Lents International',
      hours: '9:00am - 2:00pm',
      booth: '4A'
    },
    {  
      day: 'Monday',
      location: 'Pioneer Courthouse Square',
      hours: '10:00am - 2:00pm',
      booth: '7C'
    },
    {  
      day: 'Tuesday',
      location: 'Hillsboro',
      hours: '5:00pm - 8:30pm',
      booth: '1F'
    },
    {  
      day: 'Wednesday',
      location: 'Shemanski Park',
      hours: '10:00am - 2:00pm',
      booth: '3E'
    },
    {  
      day: 'Thursday',
      location: 'Northwest Portland',
      hours: '2:00pm - 6:00pm',
      booth: '6D'
    },
    {  
      day: 'Saturday',
      location: 'Beaverton',
      hours: '10:00am - 1:30pm',
      booth: '9G'
    }
  ];   
  return (
    <div>
      <style jsx>{`
        .schedule-table {
          display: flex;
          color: coral;
        }
        .schedule-table h2 {
          width: 200px;
        }
      `}</style>
      <div className="schedule-table">
        <h2>Day</h2>
        <h2>Location</h2>
        <h2>Hours</h2>
        <h2>Booth</h2>
      </div>
      {marketSchedule.map((event, index) =>
        <ScheduleRow day={event.day}
          location={event.location}
          hours={event.hours}
          booth={event.booth}
          key={index}/>
      )}
    </div>
  );
}

export default ScheduleTable;