import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";
import {
    Modal as _Modal, Button
} from "react-bootstrap";

interface ModalProps {
    title: string;
    body: string;
    cancelActionText: string;
    yesActionText: string;
    bsYesActionBtnStyle: string;
}

export class Modal extends React.Component<ModalProps> {
    // Set default properties
    static defaultProps = {
        title: "Modal title",
        body: "One fine body...",
        cancelActionText: " cancel",
        yesActionText: "save",
        bsYesActionBtnStyle: "primary"
    };

    render() {
        const {title, body, cancelActionText, bsYesActionBtnStyle, yesActionText} = this.props;
        return (
            <CSSWrapper>
                <_Modal.Dialog>
                    <_Modal.Header>
                        <_Modal.Title>{title}</_Modal.Title>
                    </_Modal.Header>

                    <_Modal.Body>{body}</_Modal.Body>

                    <_Modal.Footer>
                        <Button>{cancelActionText}</Button>
                        <Button bsStyle={bsYesActionBtnStyle}>
                            {yesActionText}
                        </Button>
                    </_Modal.Footer>
                </_Modal.Dialog>
            </CSSWrapper>
        );
    }
}

export default Modal;
