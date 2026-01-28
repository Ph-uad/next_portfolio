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
    <li
      key={ index + item.title }
      className='works flex'
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.367), rgba(0, 0, 0, 0.524)), url(${item.poster})`
      }}
    >
      <div className="details">
        <h3>{ item.title }</h3>
        <a href={item.link} target="_blank" rel="noopener noreferrer">Visit Site</a>
      </div>
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