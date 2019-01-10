import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";
import {Alert as _Alert} from "react-bootstrap";

interface AlertProps {
    text?: string;
    bsStyle: AlertStyle;
}

enum AlertStyle {
    info = "info",
    success = "success",
    warning = "warning",
    danger = "danger"
}

export class Alert extends React.Component<AlertProps> {
    // Set default properties
    static defaultProps = {
        text: "Alert",
        bsStyle: "info"
    };

    render() {
        return (
            <CSSWrapper>
                <_Alert {...this.props}> {this.props.text} </_Alert>
            </CSSWrapper>);
    }
}

export default Alert;
