import React from "react";
import "./style.css";
const Payout = () => {
  return (
    <div>
      {/* background_color_div */}
      <div className="background_color_div">
        {/* main_container */}
        <div className="container">
          {/* heading_hr_line */}
          <div className="heading_hr_line">
            <h2 className="text-white text-7xl font-normal pb-6">Wallet</h2>
            <hr className="pt-6" />
          </div>
          {/* upside_content_div */}
          <div className="upside_content_div flex">
            {/* left_side_content */}
            <div className="common_bg_color flex justify-center items-center mr-4 lg:w-1/3 rounded-xl">
              {/* content_div */}
              <div >
                {/* heading_text */}
                <div>
                  <h2 className="text-white text-center text-6xl">12 EUR</h2>
                  <p className="text-white text-center text-sm">
                    min payout: 50 EUR
                  </p>
                </div>
                {/* button_div */}
                <div className="button_div flex justify-center py-1">
                  <button className="text-sm text-white px-2.5 py-1 rounded ">
                    Request Payout
                  </button>
                </div>
              </div>
            </div>
            {/* right_side_div */}
            <div className=" common_bg_color rounded-xl lg:w-3/4">
              {/* content_div */}
              <div className="pt-4">
                {/* heading */}
                <div>
                  <h2 className="text-3xl text-white font-normal px-6">
                    Payout Requests
                  </h2>
                </div>
                {/* lists_main_div */}
                <ul className="lists_main_div flex px-4  pt-4 pb-2">
                  {/* Date */}
                  <ul className="px-6">
                    <li className="common_li text-center text-lg font-medium">
                      Date
                    </li>
                    <li className="common_li text-base font-medium text-center leading-9">
                      20.10.2021
                    </li>
                    <li className="common_li text-base font-medium text-center leading-9">
                      20.10.2021
                    </li>
                    <li className="common_li text-base font-medium text-center leading-9">
                      20.10.2021
                    </li>
                    <li className="common_li text-base font-medium text-center leading-9">
                      20.10.2021
                    </li>
                  </ul>
                  {/* Ammount */}
                  <ul className="px-6">
                    <li className="common_li text-center text-lg font-medium">
                      Ammount
                    </li>
                    <li className="common_li text-base font-medium text-center leading-9">
                      52,00 EUR
                    </li>
                    <li className="common_li text-base font-medium text-center leading-9">
                      52,00 EUR
                    </li>
                    <li className="common_li text-base font-medium text-center leading-9">
                      52,00 EUR
                    </li>
                    <li className="common_li text-base font-medium text-center leading-9">
                      52,00 EUR
                    </li>
                  </ul>
                  {/* withdrawType */}
                  <ul className="px-6">
                    <li className="common_li text-center text-lg font-medium">
                      withdrawType
                    </li>
                    <li className="common_li text-center text-base font-medium leading-9">
                      Bank
                    </li>
                    <li className="common_li text-center text-base font-medium leading-9">
                      Bank
                    </li>
                    <li className="common_li text-center text-base font-medium leading-9">
                      Bank
                    </li>
                    <li className="common_li text-center text-base font-medium leading-9">
                      Bank
                    </li>
                  </ul>
                  {/* Reciver */}
                  <ul className="px-6">
                    <li className="common_li text-center text-lg font-medium ">
                      Reciver
                    </li>
                    <li className="common_li text-base font-medium text-center leading-9">
                      AT43 39*****
                    </li>
                    <li className="common_li text-base font-medium text-center leading-9">
                      AT43 39*****
                    </li>
                    <li className="common_li text-base font-medium text-center leading-9">
                      AT43 39*****
                    </li>
                    <li className="common_li text-base font-medium text-center leading-9">
                      AT43 39*****
                    </li>
                  </ul>
                  {/* status */}
                  <ul className="px-6">
                    <li className="common_li text-center text-lg font-medium">
                      Status
                    </li>
                    <li className="common_li_green text-base font-medium text-center leading-9">
                      in Progress
                    </li>
                    <li className="common_li_green text-base font-medium text-center leading-9">
                      in Progress
                    </li>
                    <li className="common_li_green text-base font-medium text-center leading-9">
                      in Progress
                    </li>
                    <li className="common_li_green text-base font-medium text-center leading-9">
                      in Progress
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payout;
