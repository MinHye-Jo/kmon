import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/css/style.css";
import { languageState } from "../../store/app";
import { useRecoilState } from "recoil";

function Header() {
  // 서브메뉴 제어
  const [subOpen, setSubOpen] = useState(false);

  const [language, setLanguage] = useRecoilState(languageState);

  return (
    <header className="headerWrap">
      <button className="logoTop" onClick={() => (window.location.href = "/")} />

      <div className="headerRight">
        <div className="sns">
          <a href="https://twitter.com/KmonsterCNFT" target="_blank" className="twitter" rel="noreferrer"></a>
          <a href="mailto:cardanocomm@gmail.com" target="_blank" className="gmail" rel="noreferrer"></a>
        </div>
        <div className="nav">
          <Link to="/guide" className="guide">
            <div className="navIcon"></div>
            <div className="navText">Guide</div>
          </Link>
          <div className="lang">
            <div className="navIcon"></div>
            <div className="navText">
              <select
                name="language"
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
                value={language}
              >
                <option value="en">English</option>
                <option value="kr">한국어</option>
                <option value="jp">日本語</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div className="hamburger" onClick={() => setSubOpen(true)}></div>
          <div className="submenu" style={{ display: subOpen ? "block" : "none" }}>
            <div className="close" onClick={() => setSubOpen(false)}></div>
            <div className="moNav">
              <Link to="/guide" className="guide">
                <div className="navIcon"></div>
                <div className="navText">Guide</div>
              </Link>
              <div className="lang">
                <div className="navIcon"></div>
                <div className="navText">
                  <select
                    name="language"
                    onChange={(e) => {
                      setLanguage(e.target.value);
                    }}
                    value={language}
                  >
                    <option value="en">English</option>
                    <option value="kr">한국어</option>
                    <option value="jp">日本語</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="moSns">
              <a href="https://twitter.com/KmonsterCNFT" target="_blank" className="twitter" rel="noreferrer"></a>
              <a href="mailto:cardanocomm@gmail.com" target="_blank" className="gmail" rel="noreferrer"></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
