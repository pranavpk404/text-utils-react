import { useState } from "react";
import Button from "./Button";
export default function TextForm({ heading }) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const capitalizeFirstLetter = () => {
    let words = text.split(" ");
    let capitalizeFirstLetter = " ";
    words.forEach((element) => {
      capitalizeFirstLetter +=
        element.charAt(0).toUpperCase() + element.slice(1) + " ";
    });
    setText(capitalizeFirstLetter);
  };
  // Read Aloud
  const handleReadAloud = () => {
    if ("speechSynthesis" in window) {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    } else {
      alert("Your browser does not support speech synthesis");
    }
  };

  const copyToClipBoard = () => {
    const cb = navigator.clipboard;
    const paragraph = text;
    cb.writeText(paragraph);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div className="container">
        <h1 id="heading">{heading}</h1>
        <div id="textAreaContainer">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="textArea"
            rows="8"
          ></textarea>
        </div>
        <Button onclick={handleUpClick} text={"Convert to Uppercase"} />
        <Button onclick={handleLoClick} text={"Convert to Lowercase"} />
        <Button onclick={handleClearClick} text={"Clear"} />
        <Button
          onclick={capitalizeFirstLetter}
          text={"Capitalize First Letter"}
        />
        <Button onclick={handleReadAloud} text={"Read Aloud"} />
        <Button onclick={copyToClipBoard} text={"Copy To Clipboard"} />
        <Button onclick={handleExtraSpaces} text={"Remove Extra Spaces"} />
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
