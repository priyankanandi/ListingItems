import React from "react";
import List from "./component/List/List";
import { items } from "./utils/listItems";

const App = () => {
  return <List items={items} />;
};

export default App;
