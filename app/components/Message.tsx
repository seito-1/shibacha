interface MessageProps{
    message: string;
    sender: number;
    receiver: number;
    created: string;
}

export const Message = ({message, sender, receiver, created}: MessageProps) =>{
    return(
        <div className="p-4 text-xs relative">
            <p className="w-32 bg-white-300 rounded-md p-2 shadow-md">{message}</p>
            <span className="absolute bottom-[-4] left-32">{created}</span>
        </div>
    )
}