import React from "react";
import "./style.css";
const Payout = () => {
  let lists = [
    {
      id: 1,
      title: "Date",
      content: "20.10.2021",
    },
    {
      id: 2,
      title: "Ammount",
      content: "52,00 EUR",
    },
    {
      id: 3,
      title: "WithdrawType",
      content: "Bank",
    },
    {
      id: 4,
      title: "Reciver",
      content: "AT43 39***********",
    },
    {
      id: 5,
      title: "Status",
      content: "in progress",
    },
  ];
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
              <div>
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
                  {lists?.map((single) => (
                    <ul className="px-6">
                      <li className="common_li text-center text-lg font-medium">
                        {single.title}
                      </li>
                      <li className="common_li text-base font-medium text-center leading-9">
                        {single.content}
                      </li>
                      <li className="common_li text-base font-medium text-center leading-9">
                        {single.content}
                      </li>
                      <li className="common_li text-base font-medium text-center leading-9">
                        {single.content}
                      </li>
                      <li className="common_li text-base font-medium text-center leading-9">
                        {single.content}
                      </li>
                    </ul>
                  ))}
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
