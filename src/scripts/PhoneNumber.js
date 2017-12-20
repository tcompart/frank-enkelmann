import React from "react";

export default (props) => <a href={`tel:${props.number.replace(/\s/g, "")}`} className="text-nowrap">{props.number}</a>
