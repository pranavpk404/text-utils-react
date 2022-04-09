import React from "react";

function Button({ onclick, text }) {
  return (
    <button disabled={text.length === 0} className="btn" onClick={onclick}>
      {text}
    </button>
  );
}

export default Button;
