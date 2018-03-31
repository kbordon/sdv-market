import React from 'react';
import PropTypes from 'prop-types';

function SeasonalRow(props){
  return(
    <p>{props.item}</p>
  );
}

SeasonalRow.propTypes = {
  item: PropTypes.string
};

export default SeasonalRow;