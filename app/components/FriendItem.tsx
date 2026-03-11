interface FriendItemProps{
    name: string;
    statesMessage: string;
}

export const FriendItem = ({name, statesMessage}: FriendItemProps) => {
    return(
        <div className="flex items-center border-2 rounded-xl w-80 p-8 gap-4">
            <div>
                <div className="rounded-full bg-blue-200 w-8 h-8"></div>
            </div>
            <div>
                <p className="text-black text-md font-medium">
                    {name}
                </p>
                <span className="text-black text-xs line-clamp-1 break-all">
                    {statesMessage}
                </span>
            </div>
        </div>
    )
}