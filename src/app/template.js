import { Footer, MainNavigation } from "./components/layouts";

export default function Template({ children }) {
    return (<>
        <MainNavigation />
        { children }
        <Footer/>
    </>
    )
}