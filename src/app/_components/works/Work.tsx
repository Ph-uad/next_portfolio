"use client"
 


interface WorkProps {
  title: string;
  list: {
    title: string;
    link: string;
    poster: string;
  }[]
}

const Work = ({ title, list }: WorkProps) => {

  const listItem = list.map((item, index) => (
    <li key={ index + item.title } className='works flex'>
      <div className="details">
        <h3>{ item.title }</h3>
        <a href={ `${item.link}` }>Visit Site</a>
      </div>
      <style jsx>
        {`.works{background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3666666667), rgba(0, 0, 0, 0.5235294118)), url(${item.poster})}`}
      </style>
    </li>
  ))

 

  return (
    <section className="section">
      <h2>{ title }</h2>
      <ul className="grid">
        { listItem }
      </ul>
      <style jsx>
        {
          `
          section{
            margin: 10% auto 0 auto;
          }
          `
        }
      </style>
    </section>
  )
}

export default Work