import "./Card";

function Card(props) {
  const classes = "card " + props.className; // To add this "css" + props.className
  return <div className={classes}>{props.children}</div>; // props.children => to add the rest as a children
}

export default Card;
