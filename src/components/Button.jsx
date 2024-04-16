export function Button(props) {
  return (
    <button className={props.className} onClick={props.functionName}>{props.name}</button>
  )
}