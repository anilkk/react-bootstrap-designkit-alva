import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";
import {Button as _Button} from "react-bootstrap";

interface ButtonProps {
    text?: string;
    bsStyle?: string;
}

export class Button extends React.Component<ButtonProps> {
    // Set default properties
    static defaultProps = {
        text: "Button",
        bsStyle: "default"
    };

    render() {
        return (<CSSWrapper>
            <_Button {...this.props}> {this.props.text} </_Button>
        </CSSWrapper>);
    }
}

/**
 * @icon Image
 */
export default Button;
