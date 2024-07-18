import './index.css';
import "@fontsource/poppins";
import gif from '../../gif/Graphic Design.gif';

function Home() {
    return (
        <div className='home-container'>
            <div className='top'>
                <h2 className='hiring-head'>We’re Hiring! Apply Now</h2>
            </div>
            <div className='home-page'>
                <div className='nav-bar'>
                    <div style={{ display: 'flex' }}>
                        <img src='https://res.cloudinary.com/dttnhad6r/image/upload/v1720786072/5a6d874325b28fef83ece99b7d773cda_ds9rad.jpg' alt='logo' className='home-page-logo' />
                        <h2><span style={{ fontWeight: 'bolder', padding:'5px' }}>EDIA</span> BROSS</h2>
                    </div>
                    <img src='https://res.cloudinary.com/dttnhad6r/image/upload/v1720787969/Untitled_sgmaff.png' alt='logo' className='h-menu' />
                </div>
                <div className='home-page-content'>
                    <div>
                        <img src='https://res.cloudinary.com/dttnhad6r/image/upload/v1720789290/Untitled_tjhf7x.png' alt='logo' className='play-btn' />
                        <h1 className='hc-heading'>IT'S TIME TO <br />LIVE <span style={{ color: '#0157F0' }}>CREATIVELY</span></h1>
                        <hr className='hr-line' />
                        <h2 className='hc-desc'>Serving Content To <span style={{ color: '#0157F0', fontWeight:'bold'}}>97 Million</span> Followers</h2>
                        <button className='hc-button'>Enquire Now</button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className='comedy-img-con'>
                            <img src={gif} alt='logo' className='comedy-img'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;