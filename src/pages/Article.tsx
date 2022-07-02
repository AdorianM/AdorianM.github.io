import { useParams } from "react-router-dom";
import '../scss/Article.scss'
import '../scss/Content.scss'
import { useState, useEffect } from "react";
import 'doodle.css/doodle.css'

import 'katex/dist/katex.min.css'

import Test from '../content/articles/test.mdx'
import Tech from '../content/articles/tech.mdx'

const Article = () => {
    
    const params = useParams()
    const [article, setArticle] = useState('')

    let dashedTitle = "article-not-found"
    if(params.title) {
        dashedTitle = params.title.replace(/ /g, '-')
    }

    // const file = remark().use(remarkMdx).processSync(Tech)

    // useEffect(() => {
    //     // Acts as a Promise to fetch the markdown file location
    //     import(`../content/articles/${dashedTitle}.mdx`)
    //         .then(res => {
    //             // Fetch the data at the markdown location
    //             setArticle(res);
    //             console.log
    //             return res
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         });
    // })


    return (
        <article className="content-panel doodle">
            <div className="article-content">
                {/* import and render mdx with the dashedTitle */}
                <Test />
            </div>
        </article>
    );
}

export default Article;