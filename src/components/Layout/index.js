import './index.scss';
import Header  from '../Header';
import Footer from '../Footer'
import { Outlet } from 'react-router-dom';

const Layout =() => {
    return (
        <div className='App'>
            <Header />
            <div className='page'>
                <span className='tags top-tags'>
                    &lt;body&gt;
                </span>
                <Outlet />
                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                </span>
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
