import { FC } from "react";


const Spacer:FC<{width: number}> = (props: {width: number}) => {
    return <div style={{
        minWidth: props.width, // Spacer no longer resizes
        width: props.width,
        margin: 20
    }}
    >&nbsp;</div>;
}

export default Spacer