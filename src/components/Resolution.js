import React from "react";

export default function Resolution(props) {

    const [hasBeenResolved, setResolved] = React.useState(props.isResolved)

    const styles = {
        backgroundColor: hasBeenResolved ? "#FF9E9E": "#FFF"
    }

    function makeResolution() {
        setResolved(prevValue => !prevValue)
    }
    return (
        <div style = {styles} className = "resolution" onClick = {makeResolution}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}