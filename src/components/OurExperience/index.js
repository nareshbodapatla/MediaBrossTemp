
import React from 'react';
import styled, { keyframes, css } from "styled-components";
import './index.css'

const OurExprience = () => {

    const row1 = [
        "https://aws.astrotalk.com/assets/images/fullLogo.webp",
        "https://trademaklogos.s3.ap-south-1.amazonaws.com/5693707.jpeg",
        "https://1000logos.net/wp-content/uploads/2020/07/Clovia-Logo.jpg",
        "https://i.pinimg.com/originals/f6/78/78/f678785213324747501f139ef3849b52.png",
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/Jeevansathi_Logo.png",
        "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
        "https://optimise2.assets-servd.host/dig-upsiide/production/images/starbsloh.png?w=735&h=400&q=100&fm=jpg&fit=crop&dm=1668098882&s=3ee470c8b1123213d7f7f147bc1126e4",
    ];

    const row2 = [
        "https://1.bp.blogspot.com/-9bxf-DDWw9s/XJSEgzX4veI/AAAAAAAFwiM/9jLYc6e7ZW4RQ4O7qyezHEBcFNatv5CAgCLcBGAs/s1600/1.jpg",
        "https://aartisto.com/wp-content/uploads/2020/11/myntra-1200x900.png",
        "https://static.vecteezy.com/system/resources/previews/019/766/188/non_2x/prime-video-logo-prime-video-icon-transparent-logo-free-png.png",
        "https://upload.wikimedia.org/wikipedia/en/2/2f/Shark_Tank_India.jpg",
        "https://shopzlade.com/cdn/shop/files/mobile-logo-black.png?v=1654509854&width=554",
        "https://pbs.twimg.com/profile_images/1522543185012359168/vmp7JoKP_400x400.png",
        "https://logos-world.net/wp-content/uploads/2023/02/Skechers-Logo.png",
    ];


    return (
        <div className='ourexprience-container'>
            <AppContainer>
                <Wrapper>
                    <Text>Our Experience</Text>
                    <Note>The best ideas aren’t made with clients, they’re made with partners.</Note>
                    <Marquee>
                        <MarqueeGroup>
                            {row1.map((el) => (
                                <ImageGroup>
                                    <Image src={el} />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup>
                        <MarqueeGroup>
                            {row1.map((el) => (
                                <ImageGroup>
                                    <Image src={el} />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup>
                    </Marquee>
                    <Marquee>
                        <MarqueeGroup2>
                            {row2.map((el) => (
                                <ImageGroup>
                                    <Image src={el} />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup2>
                        <MarqueeGroup2>
                            {row2.map((el) => (
                                <ImageGroup>
                                    <Image src={el} />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup2>
                    </Marquee>
                </Wrapper>
            </AppContainer>

            {/*<div className='ourexp-enquire-container'>
                <div className='ourexp-enquire'>
                    <div className='ourexp-text'>
                        <p className='enquire-text'>Talk to our experts to grow your content faster than ever.</p>
                    </div>
                    <div className='ourexp-text'>
                        <button className='enquire-button'>Enquire Now</button>
                    </div>
                </div>
            </div>*/}

            <div className='ourexp-enquire-container'>
                <div className='ourexp-enquire'>
                    <div className='ourexp-text'>
                        <p className='enquire-text'>Talk to our experts to grow your content faster than ever.</p>
                    </div>
                    <div className='ourexp-text'>
                        <button className='enquire-button'>Enquire Now</button>
                    </div>
                </div>
                <div className='emoji-overlay'>
                    <span className='emoji'>😂</span>
                    <span className='emoji'>🤣</span>
                    <span className='emoji'>😂</span>
                    <span className='emoji'>🤣</span>
                    <span className='emoji'>😂</span>
                    <span className='emoji'>🤣</span>
                    <span className='emoji'>😂</span>
                    <span className='emoji'>🤣</span>
                    <span className='emoji'>😂</span>
                    <span className='emoji'>🤣</span>
                </div>
            </div>
        </div>
    );
};

export default OurExprience;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Poppins";

  position: relative;
  display: flex;
  align-items:  center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: Bold;
  margin-bottom: 10px;
  color: #082354;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #082354;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
