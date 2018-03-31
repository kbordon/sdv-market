import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
        h1 {
          font-size: 40px;
          color: goldenrod;
        }
        div {
          text-align: center;
        }
      `}
      </style>
      <h1>Star Dew Valley Produce</h1>
      <Link to='/'>Schedule</Link> | <Link to='/seasonalproduce'>Produce Available</Link>
      <hr/>
    </div>
  );
}

export default Header;