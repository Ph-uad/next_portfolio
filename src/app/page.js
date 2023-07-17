import { Header, Work } from "./components"
import blogs from "./json/Blogs"
import projects from "./json/Projects"


export const metadata = {
  title: 'Portfolio | Phuad',
}

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
          <Work title="Web Projects" list={ projects } /> 
          <Work title="Blog Posts" list={ blogs } />
      </div>
    </>
  )
}
