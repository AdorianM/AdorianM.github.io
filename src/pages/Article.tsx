import { useParams } from "react-router-dom";
import '../scss/Article.scss'
import '../scss/Content.scss'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { useState, useEffect } from "react";
import 'doodle.css/doodle.css'
import 'katex/dist/katex.min.css'

import Test from '../content/articles/test.mdx'

const Article = () => {
    
    const [content, setContent] = useState('');
    const params = useParams()

    let dashedTitle = "article-not-found"
    if(params.title) {
        dashedTitle = params.title.replace(/ /g, '-')
    }

    useEffect(() => {
        // Acts as a Promise to fetch the markdown file location
        import(`../content/articles/${dashedTitle.toLowerCase()}.md`)
            .then(res => {
                // Fetch the data at the markdown location
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => {
                        console.log(res)
                        setContent(res)
                        })
                    .catch(
                        err => {
                            console.log(err)
                        });
            })
            .catch(err => {
                console.log(err)
                setContent(`# Article not found`)
            });
    })


    return (
        <article className="content-panel doodle">
            <Test />
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]}
                           rehypePlugins={[rehypeKatex]}>
                {content}
            </ReactMarkdown>

        </article>
    );
}

export default Article;