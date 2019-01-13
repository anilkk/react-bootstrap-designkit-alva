import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";
import ButtonSize from '../Button/ButtonSize';
import {
    Pagination as _Pagination
} from "react-bootstrap";

interface PaginationProps {
    bsSize: ButtonSize;
    active: number;
    totalPagination: number;
}

export class Pagination extends React.Component<PaginationProps> {
    constructor(props: PaginationProps) {
        super(props);
        this.getItems = this.getItems.bind(this);
    }
    // Set default properties
    static defaultProps = {
        bsSize: "default",
        active: 3,
        totalPagination: 5
    };

    getItems(totalPagination: number, active: number) {
        let items = [];
        for (let number = 1; number <= totalPagination; number++) {
            items.push(
                <_Pagination.Item active={number === active}>{number}</_Pagination.Item>
            );
        }
        return items;
    }

    render() {
        const { bsSize, active, totalPagination } = this.props;
        return (
            <CSSWrapper>
                <_Pagination bsSize={bsSize}>
                    {this.getItems(totalPagination, active)}
                </_Pagination>
            </CSSWrapper>
        );
    }
}

export default Pagination;
