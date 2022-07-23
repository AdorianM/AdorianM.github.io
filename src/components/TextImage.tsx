import React, { FC } from 'react'
import '../scss/TextImage.scss'

const TextImage: FC<any> = (props) => {

    const headline = props.children.find((child: any) => child.type === 'h2')
    const text = props.children.find((child: any) => child.type === 'p')
    const image = props.children.find((child: any) => child.type === 'img')

    const position = props.side || ""

    return(
        <div className={`text-image doodle-border ${position}`}>
            <div className="image-description">
                {headline}
                {text}
            </div>
            {image}
        </div>
    )
}

export default TextImage