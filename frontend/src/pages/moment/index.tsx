import React from "react";
import moment from "moment";
const Moment = () => {
  console.log("the momet=====", moment());
  const getWeeks = () => {
    return moment().startOf("week");
  };
  const week = moment().startOf("week").format("MM");
  const weekFirstDate = moment().add(1, "days");

  console.log(
    "array===",
    new Array(7).fill(0).map((item, index) => {
      return weekFirstDate.add(index, "days").format("DD");
    })
  );

  return (
    <div>
      <>this is the moment</>
    </div>
  );
};

export default Moment;
