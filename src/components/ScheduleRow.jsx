import React from 'react';
import PropTypes from 'prop-types';

function ScheduleRow(props){
  return(
    <div className="schedule-row">
      <style jsx>{`
      .schedule-row {
        display: flex;
      }
      .schedule-row p {
        width: 200px;
      }
    `}</style>
      <p>{props.day}</p>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </div>
  );
}

ScheduleRow.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};
export default ScheduleRow;