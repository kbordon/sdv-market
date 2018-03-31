import React from 'react';

function Header(){
  return (
    <div>
      <style jsx>{`
        h1 {
          font-size: 40px;
          text-align: center;
          color: goldenrod;
        }
      `}
      </style>
      <h1>Star Dew Valley Produce</h1>
      <hr/>
    </div>
  );
}

export default Header;