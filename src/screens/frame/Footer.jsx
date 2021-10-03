import React from 'react';
import '../../styles/css/style.css';

function Footer() {
  return (
    <footer className="footerWrap">
      <div className="footerArea">
        <div className="footerTop">
          <button className="logoBottom" onClick={() => window.location.href = "/"}></button>
        </div>
        <div className="footerBottom">
          <address>
            PolicyID : 33540028ad4ade822c82d61ed2d55388422c3db0bfcd11e5e1c92e2a
            <br />
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
