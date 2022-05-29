type Props = {
  text: string;
};

const Preview = ({ text }: Props) => {
  return (
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>
        {
          text.split(/\s+/).filter((element: string) => {
            return element.length !== 0;
          }).length
        }
        words and {text.length} characters
      </p>
      <p>
        {0.008 *
          text.split(/\s+/).filter((element: string) => {
            return element.length !== 0;
          }).length}{" "}
        Minutes read
      </p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
    </div>
  );
};

export default Preview;
