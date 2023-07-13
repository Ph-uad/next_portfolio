import { Footer, MainNavigation } from "./layouts";

export default function Template({ children }) {
    return (<>
        <MainNavigation />
        { children }
        <Footer/>
    </>
    )
}