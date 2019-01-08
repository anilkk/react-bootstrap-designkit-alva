import * as React from "react";
import Loadcss from "../loadcss/loadcss";
import { Alert as _Alert } from "react-bootstrap";

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
        return (<div>
            <Loadcss />
            <_Alert {...this.props}> { this.props.text } </_Alert>
        </div>);
    }
}
export default Alert;
