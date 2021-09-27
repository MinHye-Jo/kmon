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

  useEffect(() => {
    if (data) {
      setCollectionData({ ...data });

      // soldOut 제어
      if (data.targetQuantity - data.mintCount <= 0) {
        setSoldOut(true);
      } else setSoldOut(false);

      /* clearInterval(intervalVal);
        intervalVal = setInterval(checkSoldOut, 10000);
        return false; */
    }
  }, [data]);

  return (
    <div className="popupWrap" style={{ display: open ? "block" : "none" }}>
      <div className="popup1" style={{ display: open ? "block" : "none" }}>
        <button className="popupClose" onClick={() => onClose()}></button>
        <div className="popupLeft">
          <div className={collectionData.closed ? "closed" : "soldOut"} style={{ display: "block" }}>
            <div>
              Sold
              <br />
              Out
            </div>
          </div>
          <div></div>
          <div className="popupImg">
            <img src={"img/gumi(R).png"} alt="copy url" />
          </div>
        </div>
        <div className="popupRight">
          <div className="popupTitle">{collectionData.nftNameKorZ || "GUMI (Rare)"}</div>
          <div className="popupText">
            <div className="row">
              <div className="popupSubtitle">Age</div>
              <span>{collectionData.age || "7(400)Years"}</span>
            </div>
            <div className="row">
              <div className="popupSubtitle">Story</div>
            </div>
            <div className="row">
              <span>
                She is a nine-tailed fox who can only become a human when he meets someone who truly loves him.
                <br />
                Gumi, who has a lively personality, has only had unrequited love for 400 years.
                <br />
                Gumi, who has always had unrequited love because of her young appearance, becomes infinitely shy in
                front of the person she likes. <br />
                Can Gumi meet a human who loves her in Cardano?
              </span>
            </div>
            <div className="row">
              <br />
            </div>
            <div className="row">
              <div className="popupSubtitle">Remain</div>
              <span className="blue">{collectionData.targetQuantity - collectionData.mintCount}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="popupBg"></div>
    </div>
  );
}

export default DetailModal;
