import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";
import ButtonStyle from "../Button/ButtonStyle";
import {
    Jumbotron as _Jumbotron, Button
} from "react-bootstrap";

interface JumbotronProps {
    heading: string;
    description: string;
    buttonText: string;
    bsStyle: ButtonStyle;
}

export class Jumbotron extends React.Component<JumbotronProps> {
    // Set default properties
    static defaultProps = {
        heading: "Hello, world!",
        description:
            "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
        buttonText: "Learn more",
        bsStyle: "primary"
    };

    render() {
        const {heading, description, bsStyle, buttonText} = this.props;
        return (
            <CSSWrapper>
                <_Jumbotron>
                    <h1 dangerouslySetInnerHTML={{__html: heading}}/>
                    <p dangerouslySetInnerHTML={{__html: description}}/>
                    <p>
                        <Button bsStyle={bsStyle}>{buttonText}</Button>
                    </p>
                </_Jumbotron>
            </CSSWrapper>
        );
    }
}

export default Jumbotron;
