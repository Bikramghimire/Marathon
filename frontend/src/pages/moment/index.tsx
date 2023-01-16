import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";
const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
`;
const Calender = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  border: 1px solid green;
  .active {
    background-color: red;
  }
`;
const Moment = () => {
  console.log("the momet=====", moment());
  const getWeeks = () => {
    const weekFirstDate = moment().add(1, "days");
    return new Array(7).fill(0).map((item, index) => {
      return weekFirstDate.clone().add(index, "days");
    });
  };
  const todayDay = () => {
    return moment();
  };
  const [sevenDaysWeek, setSevenDaysWeek] = useState(getWeeks());
  const [todaysDay, setTodaysDay] = useState(todayDay());
  const weeks = ["sun", "mon", "tue", "wed", "thus", "fri", "sat"];
  console.log("the seven", sevenDaysWeek, todayDay());

  return (
    <Container>
      {sevenDaysWeek.map((item, index) => {
        return (
          <Calender key={index}>
            {item === todaysDay ? <div>{weeks[index]}</div> : ""}
            <div>{item.format("DD")}</div>
          </Calender>
        );
      })}
    </Container>
  );
};

export default Moment;
