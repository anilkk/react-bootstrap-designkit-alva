import * as React from "react";
import {Helmet} from "react-helmet";
interface LoadcssProps {
}
export class Loadcss extends React.Component<LoadcssProps> {
    render() {
        return (
            <Helmet
                link={[{
                        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
                        rel: "stylesheet",
                        type: "text/css",
                        media: "all"
                }]}
            />);
    }
}
export default Loadcss;
