import React from "react";

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
        })
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
              {resolutions.map(resolution => <li>{resolution}</li>)}
            </ul>
          </div>
        </div>
      );
}