import * as React from "react";
import { Footer, MainNavigation } from "./components/layouts";

export default function Template({ children }: { children?: React.ReactNode }) {
    return React.createElement(React.Fragment, null,
        React.createElement(MainNavigation, null),
        children,
        React.createElement(Footer, null)
    );
}