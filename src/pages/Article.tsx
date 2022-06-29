import { useParams } from "react-router-dom";

const Article = () => {
    
    const params = useParams()

    return (
        <div>
            <h1>{params.title}</h1>
            <p> I am here </p>
        </div>
    );
}

export default Article;