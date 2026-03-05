export const Header = () => {
    return(
        <header className="bg-[#1e2a3b] shadow-xl">
            <div className="flex items-center justify-between p-8">
                <div className="flex gap-4 items-center">
                    <button className="bg-slate-700 rounded-full w-8 h-8 text-white text-xl font-bold">&gt;</button>
                    <div><span className="text-white text-xl font-bold">トーク</span></div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="rounded-full bg-green-200 w-8 h-8"></div>
                    <div className="rounded-full bg-blue-400 w-8 h-8"></div>
                </div>
            </div>
        </header>
    )
}