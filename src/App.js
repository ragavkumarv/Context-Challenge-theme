import "./styles.css";
import { useState } from "react";

export default function App() {
  const styles = { background: "black" };
  return (
    <div style={styles} className="App">
      <List />
    </div>
  );
}

const List = () => (
  <ul>
    <ListItem value="light" />
    <ListItem value="dark" />
  </ul>
);

const ListItem = ({ value }) => (
  <li>
    <Button value={value} />
  </li>
);

const Button = ({ value }) => {
  return <button>{value}</button>;
};
