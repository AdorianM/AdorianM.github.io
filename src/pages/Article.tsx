import { FC } from "react";

const Article:FC<{title: string}> = (props: {title: string}) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
}

export default Article;