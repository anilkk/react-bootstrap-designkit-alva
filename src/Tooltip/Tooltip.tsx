import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";

import {
    Tooltip as _Tooltip
} from "react-bootstrap";


interface TooltipProps {
    tooltipText: string;
    position: string;
}

export class Tooltip extends React.Component<TooltipProps> {
    // Set default properties
    static defaultProps = {
        tooltipText: "Tooltip text",
        position: "bottom"
    };

    render() {
        const { position, tooltipText } = this.props;
        return (
            <CSSWrapper>
                <_Tooltip
                    placement={position}
                    id={"tooltip-" + Date.now()}
                    className="in"
                >
                    {tooltipText}
                </_Tooltip>
            </CSSWrapper>
        );
    }
}

export default Tooltip;
