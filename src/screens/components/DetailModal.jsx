import React, { useState, useEffect } from "react";
import "../../styles/css/main.scss";

function DetailModal({ data, open, onClose, onAction }) {
  const [collectionData, setCollectionData] = useState({
    nftNameKor: "",
    imgUrl: "",
    age: "",
    description: "",
    nftPrice: "",
    targetQuantity: 0,
    mintCount: 0,
    closed: false,
  });
  const [soldOut, setSoldOut] = useState(false);
  const [remain, setRemain] = useState(0);
  const [intervalStop, setIntervalStop] = useState(false)



  let getRemain = null;

  useEffect(() => {

    // if (open) {
    //   // 바로 api 실행. 


    //   getRemain = setInterval(function () {
    //     if (open) {
    //       setRemain(333)
    //     }
    //   }, 10000);
    // }

    if (data) {
      setCollectionData({ ...data });
      setRemain(data.remain);
      // soldOut 제어
      if (data.closed !== null && !data.closed) {
        if (data.targetQuantity - data.mintCount <= 0) {
          setSoldOut(true);
        } else setSoldOut(false);
      }

      return () => clearInterval(getRemain);
      // 10초에 한번씩 remain 수치 불러오기.
      // remainTiktok();
      // setRemain(9999)
      /* clearInterval(intervalVal);
        intervalVal = setInterval(checkSoldOut, 10000);
        return false; */
    }
  }, [data]);

  return (
    <div className="popupWrap" style={{ display: open ? "block" : "none" }}>
      <div className="popup1" style={{ display: open ? "block" : "none" }}>
        <button className="popupClose" onClick={() => {
          onClose()
        }}></button>
        <div className="popupLeft">
          {
            collectionData.closed === true &&
            <div className={"closed"} style={{ display: "block" }}>
            </div>
          }
          {
            soldOut === true &&
            <div className={"soldOut"} style={{ display: "block" }}>
            </div>
          }
          <div></div>
          <div className="popupImg">
            <img src={collectionData.imgUrl} alt="copy url" />
          </div>
        </div>
        <div className="popupRight">
          <div className="popupTitle">{collectionData.name}</div>
          <div className="popupText">
            <div className="row">
              <div className="popupSubtitle">Age</div>
              <span>{collectionData.age}</span>
            </div>
            <div className="row">
              <div className="popupSubtitle">Story</div>
            </div>
            <div className="row">
              <span>
                {collectionData.description}
              </span>
            </div>
            <div className="row">
              <br />
            </div>
            <div className="row">
              <div className="popupSubtitle">Remain</div>
              <span className="blue">{remain}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="popupBg"></div>
    </div>
  );
}

export default DetailModal;
