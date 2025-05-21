interface InputProps {
    placeholder : string,
    reference : any,
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value : string
}

export const InputBox = (props : InputProps) =>{
   return <input value={props.value} onChange={props.onchange} className="block w-80 rounded-md py-2 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800" type="text" placeholder={props.placeholder} ref = {props.reference} />
}