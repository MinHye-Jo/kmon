import React from "react";
import "../styles/css/guide.scss";
import guide3 from "../styles/img/guide3.png";
import guide4 from "../styles/img/guide4.png";
import guide5 from "../styles/img/guide5.png";

function Guide() {
  return (
    <div className="guide">
      <div className="contentsWrap">
        <div className="contents">
          <div className="blackArea"></div>
          <div className="blackArea"></div>
          <div className="guideWrap">
            <div className="contentsTitle">Guide</div>
            <div className="contentsText">1. Click the buy button.</div>
            <div className="guideImg">
              <img src={guide5} alt="guide1" />
            </div>
            <div className="contentsText">2. After choosing the quantity, Click the buy button.</div>
            <div className="guideImg">
              <img src={guide4} alt="guide2" />
            </div>
            <div className="contentsText">
              3. Copy both the Amount and the Wallet Address.
              <br /> Send the Amount to the Wallet Address from your Yoroi or Daedalus wallet.
            </div>
            <div className="guideImg">
              <img src={guide3} alt="guide3" />
            </div>
            <div className="contentsText">4. Wait for your transaction to process.</div>
            <div className="contentsText">
              5. If the purchase was successful, NFT will be sent to the wallet address that payment was sent from.
            </div>
            <div className="contentsText">
              6. If the purchase fails or the amount does not match, The amount transferred will be automatically
              refunded excluding fees.
            </div>
            <div className="contentsText">
              <span>
                * It is based on the order in which Ada is transferred to the server wallet, not the order in which the
                purchase button was pressed.
              </span>
            </div>
          </div>
        </div>
        <div className="blackArea"></div>
      </div>
      <div className="guideBg">
        <div className="guideBottom"></div>
      </div>
    </div>
  );
}

export default Guide;
