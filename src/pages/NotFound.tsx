import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="w-full h-[100vh] flex flex-col text-xl justify-center items-center gap-2">
            404 Not Found
            <Link to={'/'} className="bg-emerald-300 p-2 rounded-lg hover:bg-emerald-200">Go back to Home</Link>
        </div>
    )
}
