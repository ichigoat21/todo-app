interface ButtonProps {
    text : string,
    onclick? : () => void,
}


export const Button = (props : ButtonProps) => {
    return <div onClick={props.onclick} className="flex items-center justify-center cursor-pointer p-4 max-w-28 rounded-md border outline-none bg-[#5409DA] text-white font-sans">{props.text}</div>
}