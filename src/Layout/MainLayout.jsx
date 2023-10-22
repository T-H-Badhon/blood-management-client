import { Outlet } from "react-router-dom";
import Header from '../Pages/Header';
import back from '../assets/red-blood-cell-background-free-vector.jpg'
const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className='h-screen rounded-2xl md:mt-5' style={{ backgroundImage: `url(${back})` }}>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayout;