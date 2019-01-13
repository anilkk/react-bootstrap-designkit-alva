import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";

import {
    Badge as _Badge
} from "react-bootstrap";


interface BadgeProps {
    badgeNumber: number;
    bsClass: string;
}

export class Badge extends React.Component<BadgeProps> {
    // Set default properties
    static defaultProps = {
        badgeNumber: 12,
        bsClass: "badge"
    };

    render() {
        return (
            <CSSWrapper>
                <_Badge {...this.props}>{this.props.badgeNumber}</_Badge>
            </CSSWrapper>
        );
    }
}

export default Badge;
