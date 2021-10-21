import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline"
import { signIn, signOut, useSession } from "next-auth/client"
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
// console.log(signIn);
function Header() {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems)

    return (
        <header >
            {/* Top nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-1">
                <div className=" mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push('/')}


                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer active:transform active:scale-90"
                    />
                </div>
                {/* Search */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input type="text" placeholder="Search" className="p-2 h-full w-6 flex-grow px-4 flex-shrink rounded-l-md outline-none" />
                    <SearchIcon className="h-12 p-4 " />

                </div>
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link" onClick={!session ? signIn : signOut}><p>{session ? `Hello ${session.user.name}` : `Sign In`}</p>
                        <p className="font-extrabold md:font-semibold sm:font-bold">Account List</p>
                    </div>
                    <div className="  link"><p>Return</p>
                        <p className="font-extrabold md:font-semibold sm:font-bold">&Orders</p></div>
                    <div className=" relative flex items-center link" onClick={() => router.push('/checkout')}>
                        <span className="absolute top-0 right-0 md:right-5 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                            {items.length}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline mt-2 font-extrabold md:font-semibold sm:font-bold">Basket</p>
                    </div>
                </div>
            </div>
            {/* Bottom nav */}
            <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-xs'>
                <p className='link flex items-center'>
                    <MenuIcon className="h-6 mr-3" />
                    All
                </p>
                <p className='link'> Prime Videos</p>
                <p className='link'>Amazon Business</p>
                <p className='link'>Today's  Deals</p>
                <p className='hidden link lg:inline-flex'>Electronics</p>
                <p className='hidden link lg:inline-flex'>Food & Grocery</p>
                <p className='hidden link lg:inline-flex'>Prime</p>
                <p className='hidden link lg:inline-flex'>Buy Again</p>
                <p className='hidden link lg:inline-flex'>Shopper Toolkit</p>
                <p className='hidden link lg:inline-flex'>Health & Personal Care</p>


            </div>

        </header>
    )
}

export default Header
