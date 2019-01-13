import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";
import ButtonStyle from '../Button/ButtonStyle';
import {
    ProgressBar as _ProgressBar
} from "react-bootstrap";

interface ProgressBarProps {
    now: number;
    striped: boolean;
    bsStyle: ButtonStyle;
}

export class ProgressBar extends React.Component<ProgressBarProps> {
    // Set default properties
    static defaultProps = {
        now: 50,
        striped: false,
        bsStyle: "primary"
    };

    render() {
        const { now, bsStyle, striped } = this.props;
        return (
            <CSSWrapper>
                <_ProgressBar
                    now={now}
                    striped={striped}
                    bsStyle={bsStyle}
                    label={`${now}%`}
                />
            </CSSWrapper>
        );
    }
}

export default ProgressBar;
