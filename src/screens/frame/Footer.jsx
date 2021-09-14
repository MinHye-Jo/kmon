import React from 'react';
import '../../styles/css/style.css';

function Footer() {
  return (
    <footer className="footerWrap">
      <div className="footerArea">
        <div className="footerTop">
          <button className="logoBottom" onClick={() => window.location.href="/"}></button>
        </div>
        <div className="footerBottom">
          <address>
            Team K-Monster
            <br />
            Copyright ⓒ Team K-Monster. All rights reserved
            <br />
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
