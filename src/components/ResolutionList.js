
export default function ResolutionList(props) {
    return (
      <div onClick = {() => {
        props.onCheckedOff(props.id) //this fn is not going to be called until this div detects a click!
        }}>
        <li>{props.listItem}</li>
      </div>
    )
}
