import { useContext, useState, useRef, useEffect } from "react";
import Player from "./wave";

import "./styles.css";

const tabs = ["large audio", "text"];

const ShowSomeText = () => <div>ShowSomeTextaaaaaa</div>;

const CMAP = {
  "large audio": Player,
  text: ShowSomeText
};

export default function App() {
  const [tab, setTab] = useState("large audio");
  const C = CMAP[tab];

  return (
    <div className="App">
      {tabs.map((item) => {
        return <h2 onClick={() => setTab(item)}>{item}</h2>;
      })}
      {/* {<Player url={"ddddd"} />} */}
      {C ? <C /> : null}
    </div>
  );
}
