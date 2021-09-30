import React, { useState, useEffect } from "react";
import { getRemainEach } from "../../services/collection";
import useInterval from "../../services/hook";
import "../../styles/css/main.scss";

function DetailModal({ totalData, data, open, onClose, onAction }) {
  const [collectionData, setCollectionData] = useState({
    nftNameKor: "",
    imgUrl: "",
    age: "",
    description: "",
    nftPrice: "",
    targetQuantity: 0,
    mintCount: 0,
    closed: false,
    remain: 0,
  });
  const [soldOut, setSoldOut] = useState(false);
  // const [remain, setRemain] = useState(0);
  const [intervalStop, setIntervalStop] = useState(false)




  useEffect(() => {

    if (data) {
      setCollectionData({
        ...totalData[data]
      });
    }
  }, [data]);


  useInterval(() => {
    // Your custom logic here
    if (open) {
      getRemainEach(data)
        .then((res) => {
          console.log(res);
          let returnValue = res.data.response;
          collectionData.remain = returnValue;
        })
    }

  }, 10000);



  return (
    <div className="popupWrap" style={{ display: open ? "block" : "none" }}>
      <div className="popup1" style={{ display: open ? "block" : "none" }}>
        <button className="popupClose" onClick={() => {
          setIntervalStop(true);
          onClose()
        }}></button>
        <div className="popupLeft">
          {
            collectionData.closed === true &&
            <div className={"closed"} style={{ display: "block" }}>
            </div>
          }
          {
            (collectionData.closed === false && collectionData.remain) === 0 &&
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
              <span className="blue">{collectionData.remain}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="popupBg" onClick={() => {
        setIntervalStop(true);
        onClose()
      }}></div>
    </div>
  );
}

export default DetailModal;
