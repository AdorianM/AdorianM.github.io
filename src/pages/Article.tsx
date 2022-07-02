import { useParams } from "react-router-dom";
import '../scss/Article.scss'
import '../scss/Content.scss'
import ReactMarkdown from 'react-markdown'
import { useState, useEffect } from "react";

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
                    .then(res => setContent(res))
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
        <article className="content-panel">
            <ReactMarkdown>
                {content}
            </ReactMarkdown>
        </article>
    );
}

export default Article;