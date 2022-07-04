import { useParams } from "react-router-dom";
import '../scss/Article.scss'
import '../scss/Content.scss'
import { useState, useEffect } from "react";
import 'doodle.css/doodle.css'

import 'katex/dist/katex.min.css'

import NotFound from '../content/articles/article-not-found.mdx'
import SideTextImage from "../components/SideTextImage";

const Article = () => {
    
    const params = useParams()
    const [article, setArticle] = useState()

    let dashedTitle = "article-not-found"
    if(params.title) {
        dashedTitle = params.title.replace(/ /g, '-')
    }

    useEffect(() => {
        import(`../content/articles/${dashedTitle}.mdx`).then(module => {
            setArticle(module.default)
        }).catch(err => {
            console.log(err)
            setArticle(undefined)
        })
    }, [dashedTitle])

    return (
        <article className="content-panel doodle">
            <div className="article-content">
                <SideTextImage>
                    <p>Test</p>
                    <h1>Ha</h1>
                    <img src="https://picsum.photos/200" alt=""/>
                </SideTextImage>
                {article ? article : <NotFound />}
            </div>
        </article>
    );
}

export default Article;