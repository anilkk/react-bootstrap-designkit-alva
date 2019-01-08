import * as React from "react";
import Loadcss from "../loadcss/loadcss";
import {Carousel as _Carousel, CarouselItem} from "react-bootstrap";

interface CarouselProps {
    text: string;
    height: number;
    width: number;
    imagesSrc: string;
}

export class Carousel extends React.Component<CarouselProps> {
    // Set default properties
    static defaultProps = {
        text: "Hello World!",
        height: 900,
        width: 500,
        imagesSrc:
            "https://via.placeholder.com/300.png/09f/fff,https://via.placeholder.com/300.png/f09/fff,https://via.placeholder.com/300.png/9f0/fff"
    };

    render() {
        const {imagesSrc, height, width} = this.props;
        return (
            <div>
                <Loadcss/>
                <_Carousel
                    prevIcon={
                        <span className="carousel-control-prev">
            <span className="carousel-control-prev-icon"/>
          </span>
                    }
                    nextIcon={
                        <span className="carousel-control-next">
            <span className="carousel-control-next-icon"/>
          </span>
                    }
                >
                    {imagesSrc.split(",").map(imageSrc => (
                        <CarouselItem className="carousel-item">
                            <img alt="image" width={width} height={height} src={imageSrc}/>
                        </CarouselItem>
                    ))}
                </_Carousel>
            </div>
        );
    }
}

export default Carousel;
