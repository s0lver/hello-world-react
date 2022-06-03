import React from "react";
import "./NiceHeader.css"

interface Props {
    name: string;
}

const NiceHeader = (props: Props) => {
    return (
        <div className="nice-header">
            Hello world {props.name}
        </div>
    )
};

export default NiceHeader;