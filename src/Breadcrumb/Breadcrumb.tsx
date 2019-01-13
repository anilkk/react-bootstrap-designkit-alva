import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";

import {
    Breadcrumb as _Breadcrumb
} from "react-bootstrap";


interface BreadcrumbProps {
    items: string;
}

export class Breadcrumb extends React.Component<BreadcrumbProps> {
    // Set default properties
    static defaultProps = {
        items: "Home/Library/Data"
    };

    render() {
        const {items} = this.props;
        const lastItemIndex = items.split("/").length - 1;
        return (
            <CSSWrapper>
                <_Breadcrumb>
                    {items.split("/").map((item, index) => {
                        const active = index === lastItemIndex ? true : false;
                        return (
                            <_Breadcrumb.Item href="#" active={active}>
                                {item}
                            </_Breadcrumb.Item>
                        );
                    })}
                </_Breadcrumb>
            </CSSWrapper>
        );
    }
}

export default Breadcrumb;
