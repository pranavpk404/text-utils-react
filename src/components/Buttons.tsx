import { CustomButtonProps, TextProps } from "../typings";

const CustomButton = ({ onclick, text }: CustomButtonProps) => {
  return (
    <button disabled={text.length === 0} className="btn" onClick={onclick}>
      {text}
    </button>
  );
};

const Buttons = ({ text, setText }: TextProps) => {
  const capitalizeFirstLetter = () => {
    let words = text.split(" ");
    let capitalizeFirstLetter = " ";
    words.forEach((element) => {
      capitalizeFirstLetter +=
        element.charAt(0).toUpperCase() + element.slice(1) + " ";
    });
    setText(capitalizeFirstLetter);
  };

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
    <div className="container">
      <CustomButton
        onclick={() => {
          setText(text.toUpperCase());
        }}
        text={"Convert to Uppercase"}
      />
      <CustomButton
        onclick={() => {
          setText(text.toLowerCase());
        }}
        text={"Convert to Lowercase"}
      />
      <CustomButton
        onclick={() => {
          setText("");
        }}
        text={"Clear"}
      />
      <CustomButton
        onclick={capitalizeFirstLetter}
        text={"Capitalize First Letter"}
      />
      <CustomButton onclick={handleReadAloud} text={"Read Aloud"} />
      <CustomButton onclick={copyToClipBoard} text={"Copy To Clipboard"} />
      <CustomButton onclick={handleExtraSpaces} text={"Remove Extra Spaces"} />
    </div>
  );
};

export default Buttons;
