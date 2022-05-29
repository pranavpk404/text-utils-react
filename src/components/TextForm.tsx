import { TextProps } from "../typings";
export default function TextForm({ text, setText }: TextProps) {
  return (
    <div className="container">
      <div id="textAreaContainer">
        <textarea
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="textArea"
          rows={8}
        ></textarea>
      </div>
    </div>
  );
}
