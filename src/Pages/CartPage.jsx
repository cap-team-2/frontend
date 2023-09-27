// Cart.jsx
import Cart from "../Components/Cart.jsx"

export default function CartPage({sessionID}) {
    return (
        <div className="h-full w-full flex flex-col pt-[136px] tablet:pt-24 display: grid grid-cols-2">
            <div className="mt-5">
                <Cart sessionID={sessionID} />
            </div>
            <div className="mt-5 w-96 ">
                <p>Summary</p>
            </div>
        </div>
    )
}