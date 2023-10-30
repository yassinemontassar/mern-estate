import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function Header() {
    const {currentUser} = useSelector(state=>state.user)
    const  [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    }; 

useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermfromUrl =urlParams.get('searchTerm');
    if (searchTermfromUrl) {
        setSearchTerm(searchTermfromUrl);
    }
}, [location.search])

    return (
        <header className='bg-slate-300 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-slate-500'>Yassine</span>
                        <span className='text-slate-800'>Estate</span>
                    </h1>
                </Link>
                <form onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-lg flex items-center'>
                    <input type="text" placeholder='Recherche...'
                 className='bg-transparent focus:outline-none w-24 sm:w-64' 
                      value={searchTerm}  
                      onChange={(e)=>setSearchTerm(e.target.value)}  
                        />
                        <button>
              <FaSearch className="text-slate-600" />
                        </button>
                   
                </form>
                <ul className="flex gap-3 items-center">
                    <Link to='/'>
                        <li className=" sm:inline text-slate-700 hover:underline p-1">
                            Home
                        </li></Link>
                    <Link to='/about'>
                        <li className=" sm:inline text-slate-700 hover:underline">About</li>
                    </Link>
                    <Link to='/profile'>
                        {currentUser ? (
                        <img className="rounded-full h-9 w-9 object-cover hover:scale-125 transation-scale duration-75"   src={currentUser.avatar} alt="" />
                        ) : (
                        <li className=" text-slate-700 hover:underline">Sign In</li>
                        )}
                        </Link>
                </ul>

            </div>
        </header>
    )
}
