import { headerLogo } from '../assets/images';
import hamburger from '../assets/icons/hamburger.svg';
import cartIcon from '../assets/icons/cart.svg';
import userIcon from '../assets/icons/user.svg';
import notificationIcon from '../assets/icons/notification.svg';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className='fixed top-0 left-0 w-full bg-white shadow-md z-50'>
            <nav className='flex justify-between items-center p-4 max-w-screen-xl mx-auto'>
                <a href="/">
                    <img src="{headerLogo}" alt="Logo" width={130} height={29} />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-8 hidden lg:flex'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat text-lg text-gray-700 hover:text-coral-red duration-300'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <form className="relative flex-1 max-w-lg mx-auto hidden lg:flex mr-4">
                    <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:border-gray-700 bg-gray-50" placeholder="Buscar produtos, marcas e muito mais..." required />
                    <button type="submit" className="absolute right-2.5 bottom-2.5 bg-transparent focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </button>
                </form>
                <div className='flex items-center gap-4'>
                    <a href="/cart">
                        <img src={cartIcon} alt="Cart" width={25} height={25} />
                    </a>
                    <a href="/notifications" className='hidden lg:block'>
                        <img src={notificationIcon} alt="Notifications" width={25} height={25} />
                    </a>
                    <a href="/profile" className='hidden lg:block'>
                        <img src={userIcon} alt="User" width={25} height={25} />
                    </a>
                    <div className='lg:hidden'>
                        <img src={hamburger} alt="Hamburger" width={25} height={25} />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
