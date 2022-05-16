import React from 'react'
import { TextStyle } from '@/styles'

const Text = ({ children, size, color, bold }) => {

    return <TextStyle
        size={size} color={color} bold={bold ? bold : false}>{children}</TextStyle>
}

Text.defaultProps = {
    size: 'xl',
    color: 'text-slate-400',
    bold: false
}



export default Text;