import React from 'react'
import './importIcons'
import './icon.scss'

interface IconProps {
    name: string
}

const Icon: React.FunctionComponent<IconProps> = (props)=> {
    return (
        <span>
            <svg className="fui-icon">
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
        </span>
    )
}

export default Icon
