import Link from 'next/link'
import classes from './page.module.css'

export default function Home() {
  return (
    <main className={ classes.main }>
      <h2>Hello</h2>
      <a href="about">route</a>
      <Link href='./about'>About</Link>
    </main>
  )
}
