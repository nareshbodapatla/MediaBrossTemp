import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import './index.css';

const Expertise = () => {
    const [isMemeMarketingVisible, setMemeMarketingVisibility] = useState(false);
    const [isContentMarketingVisible, setContentMarketingVisibility] = useState(false);
    const [isWebsiteDesigningVisible, setWebsiteDesigningVisibility] = useState(false);
    const [isAppDesigningVisible, setAppDesigningVisibility] = useState(false);
    const [isInfluencerMarketingVisible, setInfluencerMarketingVisibility] = useState(false);

    const toggleVisibility = (setter, currentState) => {
        setter(!currentState);
    };

    return (
        <div className="expertise-maincontainer">
            <div className="expertise-heading-container">
                <h1 className="expertise-heading">Expertise</h1>
                <p className="expertise-para">Finding the top digital innovations for forward-thinking brands hoping to push the envelope and make a big impact is something we are enthusiastic about.</p>
            </div>
            <div className="expertise-info-container">
                <div className="expertise-info-heading">
                    <h1 className="expertise-info-head">Meme Marketing</h1>
                    <button 
                        className="expertise-info-button" 
                        onClick={() => toggleVisibility(setMemeMarketingVisibility, isMemeMarketingVisible)}
                    >
                        <FontAwesomeIcon icon={isMemeMarketingVisible ? faArrowUp : faArrowDown} />
                    </button>
                </div>
                {isMemeMarketingVisible && (
                    <div className="expertise-info-subcontainer">
                        <div className="expertise-info-subcontainer-a">
                            <h3>What Is Meme Marketing?</h3>
                            <p>It’s an effortless combination of relatable trendy content
                                <br />combined with brand promotion! It's not just about laughs; it's
                                <br />about sparking conversations, igniting trends, and creating viral
                                <br />content that will take brands to incredible heights!
                            </p>
                        </div>
                        <div className="expertise-info-subcontainer-a">
                            <h3>Why Creativefuel?</h3>
                            <p>Ruling The Meme Marketing Domain With More Than 500+
                                MILLION Followers.
                            </p>
                            <p>Delivered 1000+ Successful Campaigns With Our In-depth
                                Experience In Meme Marketing.
                            </p>
                            <p>With A Massive Team Of 250+ Creative Individuals, We Generate Fresh Ideas Every Minute.</p>
                        </div>
                    </div>
                )}
                <hr className="line-break" />
                <div className="expertise-info-heading">
                    <h1 className="expertise-info-head">Content Marketing</h1>
                    <button 
                        className="expertise-info-button" 
                        onClick={() => toggleVisibility(setContentMarketingVisibility, isContentMarketingVisible)}
                    >
                        <FontAwesomeIcon icon={isContentMarketingVisible ? faArrowUp : faArrowDown} />
                    </button>
                </div>
                {isContentMarketingVisible && (
                    <div className="expertise-info-subcontainer">
                        <div className="expertise-info-subcontainer-a">
                            <h3>What Is Content Marketing?</h3>
                            <p>Content marketing involves creating and sharing valuable content to attract and retain a clearly defined audience, ultimately driving profitable customer action.</p>
                        </div>
                        <div className="expertise-info-subcontainer-a">
                            <h3>Why Creativefuel?</h3>
                            <p>We have delivered numerous successful campaigns through our strategic content marketing approach.</p>
                        </div>
                    </div>
                )}
                <hr className="line-break" />
                <div className="expertise-info-heading">
                    <h1 className="expertise-info-head">Website Designing</h1>
                    <button 
                        className="expertise-info-button" 
                        onClick={() => toggleVisibility(setWebsiteDesigningVisibility, isWebsiteDesigningVisible)}
                    >
                        <FontAwesomeIcon icon={isWebsiteDesigningVisible ? faArrowUp : faArrowDown} />
                    </button>
                </div>
                {isWebsiteDesigningVisible && (
                    <div className="expertise-info-subcontainer">
                        <div className="expertise-info-subcontainer-a">
                            <h3>What Is Website Designing?</h3>
                            <p>Website designing encompasses a variety of disciplines and skills in the production and maintenance of websites.</p>
                        </div>
                        <div className="expertise-info-subcontainer-a">
                            <h3>Why Creativefuel?</h3>
                            <p>We provide creative and responsive website designs that cater to your business needs.</p>
                        </div>
                    </div>
                )}
                <hr className="line-break" />
                <div className="expertise-info-heading">
                    <h1 className="expertise-info-head">App Designing</h1>
                    <button 
                        className="expertise-info-button" 
                        onClick={() => toggleVisibility(setAppDesigningVisibility, isAppDesigningVisible)}
                    >
                        <FontAwesomeIcon icon={isAppDesigningVisible ? faArrowUp : faArrowDown} />
                    </button>
                </div>
                {isAppDesigningVisible && (
                    <div className="expertise-info-subcontainer">
                        <div className="expertise-info-subcontainer-a">
                            <h3>What Is App Designing?</h3>
                            <p>App designing involves creating the user interface and user experience of mobile applications to ensure they are engaging and user-friendly.</p>
                        </div>
                        <div className="expertise-info-subcontainer-a">
                            <h3>Why Creativefuel?</h3>
                            <p>Our team delivers intuitive and visually appealing app designs that enhance user engagement.</p>
                        </div>
                    </div>
                )}
                <hr className="line-break" />
                <div className="expertise-info-heading">
                    <h1 className="expertise-info-head">Influencer Marketing</h1>
                    <button 
                        className="expertise-info-button" 
                        onClick={() => toggleVisibility(setInfluencerMarketingVisibility, isInfluencerMarketingVisible)}
                    >
                        <FontAwesomeIcon icon={isInfluencerMarketingVisible ? faArrowUp : faArrowDown} />
                    </button>
                </div>
                {isInfluencerMarketingVisible && (
                    <div className="expertise-info-subcontainer">
                        <div className="expertise-info-subcontainer-a">
                            <h3>What Is Influencer Marketing?</h3>
                            <p>Influencer marketing leverages individuals with a dedicated social media following to promote your products or services.</p>
                        </div>
                        <div className="expertise-info-subcontainer-a">
                            <h3>Why Creativefuel?</h3>
                            <p>We have a vast network of influencers that can amplify your brand's reach and engagement.</p>
                        </div>
                    </div>
                )}
                <hr className="line-break" />
            </div>
            <div className="expertise-btn-container"> 
            <button className="expertise-seemore-btn">See More</button>
            </div>
        </div>
    );
};

export default Expertise;
