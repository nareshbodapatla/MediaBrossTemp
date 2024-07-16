import './index.css'
import "@fontsource/poppins";

function Footer() {
    return (
        <>
        <div className='footer-container'>
            <div className='footer-content'>
                <h1 className='footer-head'>Your Brand’s <br/><span style={{color: '#0157F0'}}>Creatively</span> Partner</h1>
                <p className='footer-desc'>Reach us at <br/><span style={{textDecoration: 'underline'}}>mediabross.cc@gmail.com</span></p>
                <p className='footer-address'>105, Gravity Mall<br/> Vijay Nagar Indore <br/>Madhya Pradesh 452010</p>
                <p className='footer-address'>Privacy Policy</p>
            </div>
            <div className='footer-content-right'>
                <div className='footer-headings'>
                    <h1 className='footer-heading'>About</h1>
                    <h1 className='footer-heading'>Projects</h1>
                    <h1 className='footer-heading'>Contact</h1>
                    <h1 className='footer-heading'>Blogs</h1>
                    <h1 style={{color: '#0157F0'}}>We're hiring</h1>
                </div>
                <div className='footer-img-container'>
                    <img src='https://res.cloudinary.com/dttnhad6r/image/upload/v1720854414/Untitled_z1mz6t.png' alt='logo' className='footer-img' />
                    <img src='https://res.cloudinary.com/dttnhad6r/image/upload/v1720852486/Untitled_lugfmz.png' alt='logo' className='footer-img' />
                    <img src='https://res.cloudinary.com/dttnhad6r/image/upload/v1720852572/Untitled_fnmned.png' alt='logo' className='footer-img' />
                    <img src='https://res.cloudinary.com/dttnhad6r/image/upload/v1720852661/Untitled_eb9tuw.png' alt='logo' className='footer-img' />
                    <img src='https://res.cloudinary.com/dttnhad6r/image/upload/v1720852732/Untitled_m34fgi.png' alt='logo' className='footer-img' />
                </div>    
            </div>
        </div>
        </>
    )
}

export default Footer