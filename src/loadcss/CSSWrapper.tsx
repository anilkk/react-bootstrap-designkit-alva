import * as React from "react";
import Loadcss from "./loadcss";
interface LoadcssProps {
}
export class CSSWrapper extends React.Component<LoadcssProps> {
    render() {
        return (
            <div>
                <Loadcss/>
                {this.props.children}
            </div>);
    }
}
export default CSSWrapper;
