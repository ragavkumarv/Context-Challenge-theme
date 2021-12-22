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

// Expected output - https://csb-6qf0y.netlify.app/
// Reference below with context example
// https://codesandbox.io/s/github/ragavkumarv/useContext-reference-avoid-props-drilling/tree/main/
