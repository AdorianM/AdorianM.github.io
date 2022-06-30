import { useParams } from "react-router-dom";
import '../scss/Article.scss'
import '../scss/Content.scss'

const Article = () => {
    
    const params = useParams()

    return (
        <div className="content-panel article">
            <h1>{params.title}</h1>
            <p> This is a pretty test. I really like this font. Is it for me? </p>
        </div>
    );
}

export default Article;