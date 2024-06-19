import Link from "next/link"

const Button = ({ texto, handleSignIn }) => {

    return (
        <button type="button" onClick={handleSignIn} className="text-white w-22 h-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 shadow">
            {texto}
        </button>
    )

}
export default Button