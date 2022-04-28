import { ClipboardCopyIcon } from "@heroicons/react/outline"
import toast from "react-hot-toast"

const Button = (coin) => {

    return (
        <>
            <button
                onClick={() => {
                    navigator.clipboard.writeText(coin.address)
                    toast('Successfully copied!',
                        {
                            icon: '👋🏽 ',
                        }
                    );
                }}
                className="h-8 w-8 hover:text-violet-500 hover:-rotate-6"
            >
                <ClipboardCopyIcon />
            </button>
        </>
    )
}

export default Button



