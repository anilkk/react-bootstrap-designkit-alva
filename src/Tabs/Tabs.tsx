import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";

import {
    Tabs as _Tabs, Tab
} from "react-bootstrap";

interface TabsProps {
    text: string;
    defaultActiveKey: number;
    tabTitles: string;
    tabsBodyText: string;
}

export class Tabs extends React.Component<TabsProps> {
    // Set default properties
    static defaultProps = {
        defaultActiveKey: 2,
        tabTitles: "Tab 1,Tab 2,Tab 3",
        tabsBodyText: "Tab 1 content,Tab 2 content,Tab 3 content"
    };

    render() {
        const {defaultActiveKey, tabTitles, tabsBodyText} = this.props;
        const tabTitlesArray = tabTitles.split(",");
        const tabsBodyTextArray = tabsBodyText.split(",");
        return (
            <CSSWrapper>
                <_Tabs defaultActiveKey={defaultActiveKey} id={"tab-" + Date.now()}>
                    {tabTitlesArray.map((tabTitle, index) => (
                        <Tab eventKey={index + 1} title={tabTitle}>
                            {tabsBodyTextArray[index]}
                        </Tab>
                    ))}
                </_Tabs>
            </CSSWrapper>
        );
    }
}

export default Tabs;
