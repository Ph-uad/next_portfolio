"use client";

interface ArticleProps {
    data: {
        title: string;
        message: string[];
    }
}


const Article = ({ data }: ArticleProps) => {
 
    return (
        <article className="m-y">
            <header>
                <h2>
                    { data.title }
                </h2>
            </header>
            { data.message.map((d, index) => (
                <p style={{maxWidth:'60rem'}} key={ index }>
                    { d }
                </p>
            )) }
        </article>
    )
}
export default Article;