import React from "react";

function Buttons(props) {
    return(
    <div>
    <a href={props.infoLink} type="button" class="btn btn-success">View</a>
    <button type="button" class="btn btn-primary">Save</button>
    </div>
    )
}

export default Buttons;