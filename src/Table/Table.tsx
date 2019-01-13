import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";

import {
    Table as _Table
} from "react-bootstrap";

interface TableCell {
    colSpan?: number;
    data: string;
}

interface TableProps {
    text: string;
    striped: boolean;
    bordered: boolean;
    condensed: boolean;
    hover: boolean;
    tableData: string;
}

export class Table extends React.Component<TableProps> {
    // Set default properties
    static defaultProps = {
        text: "Hello World!",
        striped: true,
        bordered: true,
        condensed: true,
        hover: true,
        tableData:
            '{"head":["#","First Name","Last Name","UserName"],"rows":[[1,"Mark","Otto","@mdo"],[2,"Jacob","Thornton","@fat"],[3,{"colSpan":2,"data":"Larry the Bird"},"@twitter"]]}'
    };

    render() {
        const {striped, bordered, condensed, hover} = this.props;
        const tableData = JSON.parse(this.props.tableData);
        return (
            <CSSWrapper>
                <_Table
                    striped={striped}
                    bordered={bordered}
                    condensed={condensed}
                    hover={hover}
                >
                    <thead>
                    <tr>
                        {tableData &&
                        tableData.head &&
                        tableData.head.map((col: string) => <th>{col}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {tableData &&
                    tableData.rows &&
                    tableData.rows.map((row: TableCell[]) => (
                        <tr>
                            {row.map((cell: TableCell) => {
                                if (cell && cell.colSpan) {
                                    return <td colSpan={cell.colSpan}>{cell.data}</td>;
                                } else {
                                    return <td>{cell}</td>;
                                }
                            })}
                        </tr>
                    ))}
                    </tbody>
                </_Table>
            </CSSWrapper>
        );
    }
}

export default Table;
