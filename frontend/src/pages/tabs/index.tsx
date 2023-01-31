import React from "react";
import { Tabs } from "antd";
import BasicInfo from "./BasicInfo";
import Location from "./Location";
import Other from "./Other";

const onChange = (key: string) => {
  console.log(key);
};

const components = [
  { key: "0", children: <BasicInfo /> },
  {
    key: "1",
    children: <Location />,
  },
  {
    key: "2",
    children: <Other />,
  },
];
const Tabing: React.FC = () => {
  return (
    <Tabs
      tabPosition="left"
      items={components.map((item) => {
        return {
          label: `Tab ${item.key}`,
          key: item.key,
          children: item.children,
        };
      })}
    />
  );
};

export default Tabing;
