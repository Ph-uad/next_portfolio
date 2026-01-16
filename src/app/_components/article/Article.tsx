"use client";

import { CompanyTitle } from "../../(home)/experience/_components/company_title";

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
                <CompanyTitle title={ data.title } />
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