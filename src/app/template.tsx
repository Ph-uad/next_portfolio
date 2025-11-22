import * as React from "react";
import MainNavigation from "./_components/layouts/navigation/Navigation";
import Footer from "./_components/layouts/footer/Footer";


export default function Template({ children }: { children?: React.ReactNode }) {
    return React.createElement(React.Fragment, null,
        React.createElement(MainNavigation, null),
        children,
        // React.createElement(Footer, null)
    );
}