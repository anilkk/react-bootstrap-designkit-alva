import * as React from "react";
import { findDOMNode } from "react-dom";
import CSSWrapper from "../loadcss/CSSWrapper";
import {
    Overlay as _Overlay, Button, Tooltip
} from "react-bootstrap";

interface OverlayProps {
    text: string;
    overlayText: string;
    placement: OverlayPlacement;
}

interface OverlayState {
    show: boolean;
}

enum OverlayPlacement {
    top = "top",
    right = "right",
    bottom = "bottom",
    left = "left",
}

export class Overlay extends React.Component<OverlayProps, OverlayState> {
    // private myRef = React.createRef<Button>();
    constructor(props: OverlayProps) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
        this.getTarget = this.getTarget.bind(this);

        this.state = {
            show: false
        };
    }

    handleToggle() {
        this.setState({show: !this.state.show});
    }

    getTarget() {
        // @ts-ignore
        return findDOMNode(this.myRef);
    }

    // Set default properties
    static defaultProps = {
        text: "Hello World!",
        overlayText: "overlay text",
        placement: "bottom"
    };

    render() {
        const {text, overlayText, placement} = this.props;
        const sharedProps = {
            container: this,
            target: this.getTarget,
            show: this.state.show
        };
        return (
            <CSSWrapper>
                <div style={{height: 100, paddingLeft: 150, position: "relative"}}>
                    <Button
                        ref={(button) => {
                            // @ts-ignore
                            this.myRef = button;
                        }}
                        onClick={this.handleToggle}
                    >
                        {text}
                    </Button>

                    <_Overlay {...sharedProps} placement={placement}>
                        <Tooltip id="overload-left">{overlayText}</Tooltip>
                    </_Overlay>
                </div>
            </CSSWrapper>
        );
    }
}

export default Overlay;
