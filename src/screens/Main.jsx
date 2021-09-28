import React, { useState, useEffect } from "react";
import "../styles/css/main.scss";

import { ntfList, ntfData } from "../services/collection";
import DetailModal from "../screens/components/DetailModal";
import QrModal from "../screens/components/QrModal";
import QuantityModal from "../screens/components/QuantityModal";

import transData from "../config/tranLang";
import { languageState } from "../store/app";
import { useRecoilValue } from "recoil";

const monthName = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


function Main() {
  // 카운트 제어
  // const dday = new Date("Nov 11,2021,21:00:00 UTC"); //디데이 UTC
  const dday = new Date(Date.UTC(2021, 10, 11, 21, 0, 0));

  // console.log(dday);
  const now = new Date(); //현재 날짜 가져오기


  const [distanceTime, setDistanceTime] = useState();

  // 번역 제어
  const language = useRecoilValue(languageState);

  const distance = dday.getTime() - Date.now(); // UTC 기준 남은 시간.
  let date = (Math.floor(distance / (1000 * 60 * 60 * 24)));
  let hour = (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  let minutes = (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  let second = (Math.floor((distance % (1000 * 60)) / 1000));
  // setDistanceTime();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (second < 10) {
    second = "0" + second;
  }
  let initDistanceTime = `${date}Days ${hour}:${minutes}:${second}`;
  // setDistanceTime(`뿌우`);

  const counter = () => {
    setInterval(function () {
      const distance = dday.getTime() - Date.now(); // UTC 기준 남은 시간.
      let date = (Math.floor(distance / (1000 * 60 * 60 * 24)));
      let hour = (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      let minutes = (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      let second = (Math.floor((distance % (1000 * 60)) / 1000));
      // setDistanceTime();
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (second < 10) {
        second = "0" + second;
      }
      setDistanceTime(`${date}Days ${hour}:${minutes}:${second}`);

    }, 1000);
  };

  // 데이터 제어
  const [collectionList, setCollectionList] = useState(null);
  const closed = dday.getMonth() !== now.getUTCMonth() || dday.getDate() < now.getUTCDate() ? true : false;
  // const [soldOut, setSoldOut] =  useState(false);

  // 팝업1 제어
  const [popup1Open, setPopup1Open] = useState(false);
  const [popup1Data, setPopup1Data] = useState(null);

  // 팝업2 제어
  const [popup2Open, setPopup2Open] = useState(false);
  const [popup2Data, setPopup2Data] = useState(null);

  // 팝업3 제어
  const [popup3Open, setPopup3Open] = useState(false);
  const [popup3Data, setPopup3Data] = useState(null);

  counter();
  // 코인 리스트 조회
  useEffect(() => {
    (async () => {
      // counter();
      const { data } = await ntfList();
      if (data && data.return_code === 200) setCollectionList(data.response);
    })();

  }, []);



  // 코인 세부 정보 조회
  const collectClick = async (nftId) => {
    const { data } = await ntfData(nftId);
    if (data && data.return_code === 200) {
      const detilData = { ...data.response, closed: closed };
      setPopup1Data(detilData);
      setPopup1Open(true);
    }
  };

  // QR 모달 오픈
  const openQrModal = (data) => {
    setPopup3Open(false);
    setPopup2Open(true);
    setPopup2Data(data);
  };

  return (
    <div className="main">
      <div className="contentsWrap">
        <div className="mainImg">
          <div className="characterWrap">
            <div className="mainTitle" style={{ display: !closed ? "block" : "none" }}>
              COMING SOON
              <br />
              <span className="countDate">{monthName[dday.getUTCMonth()]} {dday.getUTCDate()}th {dday.getUTCHours() + (dday.getUTCHours() > 12 ? "PM" : "AM")} (UTC)</span>
            </div>
            <div className="mainTitle2" style={{ display: closed ? "block" : "none" }}>
              <b>Series2</b>
              <br />
              <span className="mainSubtitle">
                Teenage and Special NFT
                <br />
              </span>
              <div>
                <span className="countDate">{monthName[dday.getUTCMonth()]} {dday.getUTCDate()}th {dday.getUTCHours() + (dday.getUTCHours() > 12 ? "PM" : "AM")} (UTC)</span>
                <p className="countDown">{distanceTime === undefined ? initDistanceTime : distanceTime}</p>
              </div>
            </div>
            <div className="character"></div>
            <button className="btnBuy" onClick={() => setPopup3Open(true)}>
              BUY NOW!
            </button>
          </div>
          <div className="mainBottom"></div>
        </div>
        <div className="contents">
          <div className="contentsTitle">{transData[language].title}</div>
          <div className="contentsText" dangerouslySetInnerHTML={{ __html: transData[language].desc }}></div>
          <div className="blackArea"></div>
          <div className="contentsTitle">Series 2</div>
          <div className="contentsBox">
            <div className="collection" onClick={() => setPopup1Open(true)}>
              <div className="collectionImg">
                <div className="soldOut" style={{ display: "block" }}></div>
                <div className="imgArea">
                  <img src={"img/gumi(R).png"} alt="copy url" />
                </div>
              </div>
              <div className="collectionText">gumi</div>
            </div>
            <div className="collection">
              <div className="collectionImg">
                <div className="soldOut"></div>
                <div className="imgArea">
                  <img src={"img/gumi(R).png"} alt="copy url" />
                </div>
              </div>
              <div className="collectionText">gumi</div>
            </div>
            <div className="collection">
              <div className="collectionImg">
                <div className="soldOut"></div>
                <div className="imgArea">
                  <img src={"img/gumi(R).png"} alt="copy url" />
                </div>
              </div>
              <div className="collectionText">gumi</div>
            </div>
            <div className="collection">
              <div className="collectionImg">
                <div className="soldOut"></div>
                <div className="imgArea">
                  <img src={"img/gumi(R).png"} alt="copy url" />
                </div>
              </div>
              <div className="collectionText">gumi</div>
            </div>
            <div className="collection">
              <div className="collectionImg">
                <div className="soldOut"></div>
                <div className="imgArea">
                  <img src={"img/gumi(R).png"} alt="copy url" />
                </div>
              </div>
              <div className="collectionText">gumi</div>
            </div>
          </div>
          <div className="blackArea"></div>
          <div className="contentsTitle">Series 1</div>
          <div className="contentsBox">
            {/* {collectionList && collectionList.length
              ? collectionList.map((o, idx) => {
                  return (
                    <div className="collection" key={idx} onClick={() => collectClick(o.nftId)}>
                      <div className="collectionImg">
                        <div
                          className={closed ? "closed" : "soldOut"}
                          style={{ display: o.targetQuantity <= o.mintCount || closed ? "block" : "none" }}
                        />
                        <div className="imgArea">
                          <img src={o.imgUrl.replace("/static", "")} alt={o.nftName} name={o.nftName} />
                        </div>
                      </div>
                      <div className="collectionText"> {o.nftNameKor} </div>
                    </div>
                  );
                })
              : null} */}
          </div>
          <QuantityModal
            data={popup3Data}
            open={popup3Open}
            onClose={() => setPopup3Open(false)}
            onAction={() => openQrModal()}
          />
          <DetailModal
            data={popup1Data}
            open={popup1Open}
            onClose={() => setPopup1Open(false)}
            onAction={(data) => openQrModal(data)}
          />
          <QrModal data={popup2Data} open={popup2Open} onClose={() => setPopup2Open(false)} />
        </div>
        <div className="blackArea"></div>
        <div className="blackArea"></div>
      </div>
    </div>
  );
}

export default Main;
