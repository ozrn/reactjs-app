import React from "react";

export default function List() {

    const [resolutionText, setResolutionText] = React.useState("");

    function handleChange(e) {
        const newValue = e.target.value;
        setResolutionText(newValue);
    }

    return (
        <div className ="container">
          <div className ="form">
            <input onChange = {handleChange} type ="text" value = {resolutionText} />
            <button>
              <span>Add</span>
            </button>
          </div>
          <div>
            <ul>
              <li>New Year's Resolution</li>
            </ul>
          </div>
        </div>
      );
}