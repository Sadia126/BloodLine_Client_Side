
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <>  
            <Navbar></Navbar>
            <div className="max-w-screen-xl p-2 md:p-0 mx-auto">
                  <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;