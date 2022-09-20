import './index.scss';
import Header  from '../Header';
import Footer from '../Footer'
import { Outlet } from 'react-router-dom';

const Layout =() => {
    return (
        <div className='App'>
            <Header />
            <Footer />
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>

                <Outlet />
                <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br />
                </span>
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </div>
        </div>
    )
}

export default Layout;
