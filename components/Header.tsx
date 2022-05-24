import {BellIcon, SearchIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
function Header() {
    const {logout} = useAuth()

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() =>{
        const handleScroll = () => {
            if (window.scrollY > 0){
                setIsScrolled(true)
            } else{
                setIsScrolled(false) 
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className="flex  items-center space-x-2 md:space-x-10">
            <img src="https://kagi.com/proxy/netflix_PNG25.png?c=_k2SEP71vubeNJlITPQhEc4BuqL0RgcbYZmiQl3nRwD5TmdvO6o9KV7LLHrfO0v2J-OZ69Y0ea7sPBMhbIVZxA%3D%3D" width={100} height={100} className="cursor-pointer object-contain" />
            <ul className="hidden space-x-4 md:flex" >
                <li className = "headerLink">Home</li>
                <li className = "headerLink">TV Shows</li>
                <li className = "headerLink">Movies</li>
                <li className = "headerLink">Recently Added</li>
                <li className = "headerLink">My List</li>
            </ul>
        </div>
    
        <div className="flex items-center space-x-4 text-sm font-light">
            <SearchIcon className="hidden h-6 w-6 sm:inline"/>
            <p className="hidden lg:inline">Kids</p>
            <BellIcon className=" h-6 w-6 "/>
            {/* <Link href="/account"> */}
                <img onClick={logout} src="https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg" width={30} height={30} className="cursor-pointer rounded" />
            {/* </Link> */}
        </div> 
    </header>
  )
}

export default Header