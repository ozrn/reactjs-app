import React from "react";
import ResolutionList from "./ResolutionList";

export default function List() {

    const [resolutionText, setResolutionText] = React.useState("");
    const [resolutions, setResolutions] = React.useState([]);

    function handleChange(e) {
        const newValue = e.target.value;
        setResolutionText(newValue);
    }

    function addResolution() {
        setResolutions(prevRes => {
            return [...prevRes, resolutionText];
        });
        setResolutionText(""); // it clears the input field when the add button is clicked.
    }

    return (
        <div className ="container">
          <div className ="form">
            <input onChange = {handleChange} type ="text" value = {resolutionText} />
            <button onClick = {addResolution}>
              <span>Add</span>
            </button>
          </div>
          <div>
            <ul>
              {resolutions.map(resolution => 
                <ResolutionList
                  listItem = {resolution} 
                />
              )}
            </ul>
          </div>
        </div>
      );
}