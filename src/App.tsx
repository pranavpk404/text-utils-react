import "./App.css";
import { useState } from "react";

import TextForm from "./components/TextForm";
import Buttons from "./components/Buttons";
import Preview from "./components/Preview";
function App() {
  const [text, setText] = useState("");

  return (
    <main className="container">
      <h1 id="heading">
        Try TextUtils - word counter, character counter, remove extra spaces
      </h1>
      <TextForm setText={setText} text={text} />
      <Buttons setText={setText} text={text} />
      <Preview text={text} />
    </main>
  );
}

export default App;
