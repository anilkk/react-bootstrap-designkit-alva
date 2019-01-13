import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";

import {
    Popover as _Popover
} from "react-bootstrap";


interface PopoverProps {
    title: string;
    bodyText: string;
    placement: string;
    positionLeft: number;
    positionTop: number;
}

export class Popover extends React.Component<PopoverProps> {
    // Set default properties
    static defaultProps = {
        title: "Hello World!",
        bodyText: "And here's some amazing content. It's very engaging. right?",
        placement: "right",
        positionLeft: 200,
        positionTop: 50
    };

    render() {
        const {
            bodyText,
            placement,
            positionLeft,
            positionTop,
            title
        } = this.props;
        return (
            <CSSWrapper>
                <_Popover
                    id={"popover" + Date.now()}
                    placement={placement}
                    positionLeft={positionLeft}
                    positionTop={positionTop}
                    title={title}
                >
                    {bodyText}
                </_Popover>
            </CSSWrapper>
        );
    }
}

export default Popover;
