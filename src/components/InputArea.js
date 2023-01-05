export default function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={props.handleChange}
        type="text"
        value={props.inputText}
      />
      <button onClick={props.handleClick}>
        <span>Add</span>
      </button>
    </div>
  );
}
