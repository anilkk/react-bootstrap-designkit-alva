import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";

import {
    Well as _Well
} from "react-bootstrap";


interface WellProps {
    text: string;
}

export class Well extends React.Component<WellProps> {
    // Set default properties
    static defaultProps = {
        text: "Look I'm in a well!"
    };

    render() {
        return (
            <CSSWrapper>
                <_Well><div dangerouslySetInnerHTML={{__html: this.props.text}}></div></_Well>
            </CSSWrapper>
        );
    }
}

export default Well;
