import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";
import {
    PageHeader as _PageHeader
} from "react-bootstrap";

interface PageHeaderProps {
    text: string;
    subText: string;
}

export class PageHeader extends React.Component<PageHeaderProps> {
    // Set default properties
    static defaultProps = {
        text: "Example page header",
        subText: "Subtext for header"
    };

    render() {
        const { text, subText } = this.props;
        return (
            <CSSWrapper>
                <_PageHeader>
                    {text} <small>{subText}</small>
                </_PageHeader>
            </CSSWrapper>
        );
    }
}

export default PageHeader;
