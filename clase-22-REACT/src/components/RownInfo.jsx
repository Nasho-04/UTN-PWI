import React from "react";

export const RownInfo = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>{props.children}</div>
        </div>
    )
}