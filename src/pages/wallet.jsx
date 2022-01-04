import React from "react";
import Earning from "../components/wallet/earning";
import Payout from "../components/wallet/payout";
const Wallet = () => {
  return (
    <div>
      <Payout/>
      <Earning/>
    </div>
  );
};
export default Wallet;
