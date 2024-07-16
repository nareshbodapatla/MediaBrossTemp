
import React from 'react';
import './index.css';

const OurPartners = () => {
    const items = [
        "Regional", "Premium Meme", "Meme Page", "Creators",
        "Recommendation", "Premium Bollywood", "Bollywood", "Premium Twitter",
        "Twitter", "Women"
    ];

    return (
        <div className='ourpartner-container'>
            <h1 className='ourpartner-heading'>Our Partners</h1>
            <div className='ourpartner-subcontainer'>
                <div className='subcont-1'>
                    <div className="circle-container">
                        <div className="globe">
                            <img className='image-globe' src="https://i.pinimg.com/736x/53/e0/94/53e094186c46900c612998358af773d1.jpg" alt="globe" />
                        </div>
                        {items.map((item, index) => (
                            <div key={index} className={`circle-item circle-item-${index}`}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='follower-main-container'>
                    <div className='followers'>
                        <div className='followers-container'>
                            <div >
                                <img className='follower-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzn__dvMkPQWg66IGJ0y5QWJlpwUHnhFoaYQ&s' alt='logo' />
                            </div>
                            <div>
                                <h5>Sarcastic_us</h5>
                                <p className='followers-para'><span>10.1M</span> Follwers</p>
                            </div>
                        </div>
                        <div className='followers-container'>
                            <div>
                                <img className='follower-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzn__dvMkPQWg66IGJ0y5QWJlpwUHnhFoaYQ&s' alt='logo' />
                            </div>
                            <div>
                                <h5>Clips</h5>
                                <p className='followers-para'><span>14.7M</span> Follwers</p>
                            </div>
                        </div>
                    </div>
                    <div className='followers'>
                        <div className='followers-container'>
                            <div >
                                <img className='follower-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzn__dvMkPQWg66IGJ0y5QWJlpwUHnhFoaYQ&s' alt='logo' />
                            </div>
                            <div>
                                <h5>Naughtyworld</h5>
                                <p className='followers-para'><span>9.9M</span> Follwers</p>
                            </div>
                        </div>
                        <div className='followers-container'>
                            <div>
                                <img className='follower-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzn__dvMkPQWg66IGJ0y5QWJlpwUHnhFoaYQ&s' alt='logo' />
                            </div>
                            <div>
                                <h5>Trollsofficial</h5>
                                <p className='followers-para'><span>7.7M</span> Follwers</p>
                            </div>
                        </div>

                    </div>
                    <div className='followers'>
                        <div className='followers-container'>
                            <div >
                                <img className='follower-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzn__dvMkPQWg66IGJ0y5QWJlpwUHnhFoaYQ&s' alt='logo' />
                            </div>
                            <div>
                                <h5>Ghantaa</h5>
                                <p className='followers-para'><span>8M</span> Follwers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPartners;