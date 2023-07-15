

const Article = ({ data }) => {
    console.log( data);
    return (
        <article>
            <header>
                <h3>
                    { data.title }
                </h3>
            </header>
            { data.message.map((d, index) => (
                <p key={ index }>
                    { d }
                </p>
            )) }
        </article>
    )
}
export default Article;