import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";
import {
    Image as _Image
} from "react-bootstrap";

interface ImageProps {
    src: string;
    responsive: boolean;
    rounded: boolean;
    circle: boolean;
    thumbnail: boolean;
    bsClass: string;
}

export class Image extends React.Component<ImageProps> {
    // Set default properties
    static defaultProps = {
        src: "https://via.placeholder.com/150",
        responsive: true,
        rounded: true,
        circle: true,
        thumbnail: true,
        bsClass: "img"
    };

    render() {
        const {src, responsive, rounded, circle, thumbnail} = this.props;
        return (
            <CSSWrapper>
                <_Image
                    src={src}
                    responsive={responsive}
                    rounded={rounded}
                    circle={circle}
                    thumbnail={thumbnail}
                />
            </CSSWrapper>
        );
    }
}

export default Image;
