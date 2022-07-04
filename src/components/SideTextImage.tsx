import React, { FC } from 'react'
import { isPropertySignature } from 'typescript'

const SideTextImage: FC<any> = (props) => {

    const headline = props.children.find((child: any) => child.type === 'h1')
    const text = props.children.find((child: any) => child.type === 'p')
    const image = props.children.find((child: any) => child.type === 'img')

    return(
        <div className="side-text-image">
            <div className="side-text-image-text">
                {headline}
                {text}
            </div>
            <div className="side-text-image-image">
                {image}
            </div>
        </div>
    )
}

export default SideTextImage