"use client";

import { Title } from "../../../_components/UI/title";

 
interface ArticleProps {
    data: {
        title: string;
        message: string[];
    }
}


const Article = ({ data }: ArticleProps) => {
 
    return (
        <article className="w-full">
            <header>
                <Title title={ data.title } />
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