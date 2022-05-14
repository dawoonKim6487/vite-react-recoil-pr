import React from 'react'

const Text = ({ children, size, color }) => <span className={`text-${size} ${color}`}>{children}</span>

Text.defaultProps = {
    size: 'xl',
    color: 'text-slate-400'
}



export default Text;