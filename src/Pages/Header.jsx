import { Button, Navbar } from 'flowbite-react';
import logo from '../assets/blood-donation-logo-template-icon-symbol-vector-40373654-removebg-preview.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar fluid rounded>
                <Navbar.Brand href="/">
                    <img src={logo} className="mr-3 h-10 sm:h-9" alt="Flowbite React Logo" />
                    <h1 className="self-center whitespace-nowrap text-3xl font-semibold text-red-500 dark:text-white">Blood Bank- HNP</h1>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Link to='/login'><Button color="failure">Sign In</Button></Link>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link className='text-red-500 text-xl p-2 rounded-lg hover:bg-red-500 hover:text-white' to='/' active>
                        Home
                    </Link>
                    <Link className='text-red-500 text-xl p-2 rounded-lg hover:bg-red-500 hover:text-white' to='/about'>About</Link>
                    <Link className='text-red-500 text-xl p-2 rounded-lg hover:bg-red-500 hover:text-white' to='/services'>Services</Link>
                    <Link className='text-red-500 text-xl p-2 rounded-lg hover:bg-red-500 hover:text-white' to='finddonor'>Find a DONOR</Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;