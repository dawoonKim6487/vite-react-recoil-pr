import React from 'react'
import { TextStyle } from '@/styles'

const Text = ({ children, size, color }) => {

    return <TextStyle
        size={size} color={color}>{children}</TextStyle>
}

Text.defaultProps = {
    size: 'xl',
    color: 'text-slate-400'
}



export default Text;