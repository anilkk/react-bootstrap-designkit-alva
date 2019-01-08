import * as React from "react";
import Loadcss from "../loadcss/loadcss";
import { Button as _Button } from "react-bootstrap";

interface ButtonProps {
  text?: string;
  bsStyle?: string;
}

export class Button extends React.Component<ButtonProps> {
  // Set default properties
  static defaultProps = {
    text: "Button",
    bsStyle: "default"
  };

  render() {
    return (<div>
      <Loadcss />
      <_Button {...this.props}> { this.props.text } </_Button>
    </div>);
  }
}
export default Button;
