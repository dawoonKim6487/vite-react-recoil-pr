import tw from "tailwind-styled-components"

export const InputStyle = tw.input`
    w-full
    outline-none
    p-2
    bg-transparent
    placeholder:text-slate-200
    placeholder:italic
    focus:font-bold
    text-white
`

export const TextStyle = tw.h2`
${(props) => props.color ? props.color : 'text-slate-400'},
${(props) => props.size ? 'text-' + props.size : 'text-xl'},
${(props) => props.bold ? 'font-bold' : 'font-normal'}
`
