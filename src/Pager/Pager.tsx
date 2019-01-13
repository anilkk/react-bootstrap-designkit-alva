import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";
import {
    Pager as _Pager
} from "react-bootstrap";

interface PagerProps {
    previousText: string;
    nextText: string;
    previousLink: string;
    nextLink: string;
    alignPrevious: boolean;
    alignNext: boolean;
}

export class Pager extends React.Component<PagerProps> {
    // Set default properties
    static defaultProps = {
        previousText: "Previuos",
        nextText: "Next",
        previousLink: "#",
        nextLink: "#",
        alignPrevious: false,
        alignNext: false
    };

    render() {
        const {
            previousText,
            nextText,
            previousLink,
            nextLink,
            alignPrevious,
            alignNext
        } = this.props;
        return (
            <CSSWrapper>
                <_Pager>
                    <_Pager.Item previous={alignPrevious} href={previousLink}>
                        {previousText}
                    </_Pager.Item>
                    <_Pager.Item next={alignNext} href={nextLink}>
                        {nextText}
                    </_Pager.Item>
                </_Pager>
            </CSSWrapper>
        );
    }
}

export default Pager;
