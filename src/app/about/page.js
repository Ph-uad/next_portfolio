import { Article, Process } from '../components'
import { DomData } from '../json/domData'
import classes from './about.module.css'
import { Rubik_Moonrocks } from 'next/font/google'

const rubik = Rubik_Moonrocks({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'About'
}

export default function About() {
  return (
    <>
      <header className={ `${rubik.className} , ${classes.header}` }>
        <h2>Novum Testamentum</h2>
        <h2>Romani</h2>
        <h2> ٣-٤</h2>
      </header>

      <main className={`container ${classes['main']}`}>
        <Article data={ DomData.bio } />
        <Article data={ DomData.insight } />
        <Process />
      </main>
    </>
  )
}