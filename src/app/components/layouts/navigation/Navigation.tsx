import Link from 'next/link'
import styles from './Navigation.module.css'

const MainNavigation = () => {
  return (
    <nav className={ `${styles.nav} flex` }>

      <section className={ `${styles.navigation_list}` }>
        <ul className="list flex">
          <li className="list_item"> <Link href="/">Home</Link></li>
          <li className="list_item"> <Link href="/about">About</Link></li>
        </ul>
      </section>
    </nav>
  )
}

export default MainNavigation