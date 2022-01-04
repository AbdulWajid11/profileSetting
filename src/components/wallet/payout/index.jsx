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
      <div className="background_color_div flex justify-center">
        {/* main_container */}
        <div className="w-3/4">
          {/* heading_hr_line */}
          <div className="heading_hr_line w-full lg:w-4/5">
            <h2 className="text-white text-3xl lg:text-7xl font-normal text-center lg:text-left pt-4 pb-4  lg:pb-6">Wallet</h2>
            <hr className="pt-6" />
          </div>
          {/* upside_content_div */}
          <div className="upside_content_div flex flex-col lg:flex-row lg:flex-row">
            {/* left_side_content */}
            <div className="common_bg_color flex justify-center items-center mb-4 lg:mb-0 mr-0 lg:mr-4 w-full lg:w-1/3 rounded-xl">
              {/* content_div */}
              <div>
                {/* heading_text */}
                <div>
                  <h2 className="text-white text-center text-3xl  lg:text-6xl">12 EUR</h2>
                  <p className="text-white text-center text-xs lg:text-sm">
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
            <div className=" common_bg_color rounded-xl  w-full lg:w-3/4">
              {/* content_div */}
              <div className="pt-4">
                {/* heading */}
                <div>
                  <h2 className="text-3xl text-white font-normal px-6">
                    Payout Requests
                  </h2>
                </div>
                {/* lists_main_div */}
                <ul className="lists_main_div flex flex-col lg:flex-row  px-0  lg:px-4  pt-4 pb-2">
                  {lists?.map((single) => (
                    <ul className="py-2 lg:py-0 px-0 lg:px-4">
                      <li className="common_li text-center text-xl font-medium">
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
