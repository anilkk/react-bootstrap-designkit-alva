import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";
import ButtonStyle from "../Button/ButtonStyle";
import ButtonSize from "../Button/ButtonSize";
import {
    Glyphicon as _Glyphicon,
    Button
} from "react-bootstrap";

interface GlyphiconProps {
    text: string;
    icon: string;
    bsStyle: ButtonStyle;
    bsSize: ButtonSize;
}

export class Glyphicon extends React.Component<GlyphiconProps> {
    // Set default properties
    static defaultProps = {
        text: "star",
        icon: "star",
        bsSize: "small",
        bsStyle: "default"
    };

    render() {
        const {text, icon, bsStyle, bsSize} = this.props;
        return (
            <CSSWrapper>
                <Button bsSize={bsSize} bsStyle={bsStyle}>
                    <_Glyphicon glyph={icon}/>
                    {' '} {text}
                </Button>
            </CSSWrapper>
        );
    }
}

export default Glyphicon;
