import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";
import ButtonStyle from "../Button/ButtonStyle";
import {
    DropdownButton,
    MenuItem
} from "react-bootstrap";

interface DropdownProps {
    title: string;
    menuItems: string;
    bsStyle: ButtonStyle;
}

export class Dropdown extends React.Component<DropdownProps> {
    // Set default properties
    static defaultProps = {
        title: "Dropdown!",
        menuItems: "item 1, item 2, item 3",
        bsStyle: "default"
    };

    render() {
        const {title, menuItems, bsStyle} = this.props;
        return (
            <CSSWrapper>
                <DropdownButton bsStyle={bsStyle} title={title} id={'dropodwon-bootstrap-' + Date.now()}>
                    {menuItems.split(',').map((item, index) => (<MenuItem eventKey={index}>{item}</MenuItem>))}
                </DropdownButton>
            </CSSWrapper>
        );
    }
}

export default Dropdown;
