import React from "react";
import ResolutionList from "./ResolutionList";
import InputArea from "./InputArea";

export default function List() {
  const [resolutionText, setResolutionText] = React.useState("");
  const [resolutions, setResolutions] = React.useState([]);

  function handleChange(e) {
    const newValue = e.target.value;
    setResolutionText(newValue);
  }

  function addResolution() {
    resolutionText.length > 0 &&
      setResolutions((prevRes) => {
        return [...prevRes, resolutionText];
      });
    setResolutionText(""); // it clears the input field when the add button is clicked.
  }

  function deleteResolution(id) {
    setResolutions((prevRes) => {
      return prevRes.filter((res, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <InputArea
        handleClick={addResolution}
        handleChange={handleChange}
        inputText={resolutionText}
      />
      <div>
        <ul>
          {resolutions.map((resolution, index) => (
            <ResolutionList
              key={index}
              id={index}
              listItem={resolution}
              onCheckedOff={deleteResolution}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
