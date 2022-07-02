import { useParams } from "react-router-dom";
import '../scss/Article.scss'
import '../scss/Content.scss'

import Paper from '../components/Paper'

const Article = () => {
    
    const params = useParams()

    return (
        <article className="content-panel">
            <h1>{params.title}</h1>
            {/* <Paper /> */}
            <p> This is a pretty test. I really like this font. Is it for me? </p>
        </article>
    );
}

export default Article;