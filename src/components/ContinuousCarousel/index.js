import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/poppins";
// import { Carousel } from 'react-responsive-carousel';
import './index.css';

const data = [
    { id: 1, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720793863/990187f47328564cc66bd2bdfe0be6b0_egeezn.png", alt: "Sher memes", date: "2024 July"},
    { id: 2, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720794878/195ad7e84702c54a1a210598ba294c0e_ywzs37.png", alt: "Barbie vs Oppenheimer", date: "2024 June"},
    { id: 3, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720794993/d66d4f9bc7369ae43268007a5f0c337d_jgtunr.png", alt: "Haule Haule Sajna", date: "2024 May"},
    { id: 4, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795085/11182e9fb57baa1640093e4455fc57a0_nohxb7.png", alt: "Elivish Bhai", date: "2024 April"},
    { id: 5, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795206/67a427bd9e86892f9460f73d6726a791_ao29tq.png", alt: "The Boys", date: "2024 March"},
    { id: 6, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795284/8a8c2b0a0160129399f8ca3d54a7379d_kzfnx1.png", alt: "Punit Superstar", date: "2024 February"},
    { id: 7, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795397/44d2269a9997eb3e877ab854daed4aa8_c9q4zd.png", alt: "Kaccha Badam", date: "2024 January"},
    { id: 8, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795486/568a13c1412d15e219fbe3e1389d8745_tbctjv.png", alt: "Mera Dil Ye Pukare", date: "2023 December"},
    { id: 9, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795599/704b0067b9c1a039186acf739765091a_oshwkm.png", alt: "Oscar slap", date: "2023 November"},
    { id: 10, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795781/cdee50e784b543cf7c52100d496feb1d_a7djqr.png", alt: "Binod Memes", date: "2023 October"},
    { id: 11, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795781/cdee50e784b543cf7c52100d496feb1d_a7djqr.png", alt: "Binod Memes", date: "2023 September"},
    { id: 12, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795781/cdee50e784b543cf7c52100d496feb1d_a7djqr.png", alt: "Binod Memes", date: "2023 August"},
    { id: 13, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795781/cdee50e784b543cf7c52100d496feb1d_a7djqr.png", alt: "Binod Memes", date: "2023 July"},
    { id: 14, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795781/cdee50e784b543cf7c52100d496feb1d_a7djqr.png", alt: "Binod Memes", date: "2023 June"},
    { id: 15, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795781/cdee50e784b543cf7c52100d496feb1d_a7djqr.png", alt: "Binod Memes", date: "2023 May"},
    { id: 16, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795781/cdee50e784b543cf7c52100d496feb1d_a7djqr.png", alt: "Binod Memes", date: "2023 April"},
    { id: 17, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795781/cdee50e784b543cf7c52100d496feb1d_a7djqr.png", alt: "Binod Memes", date: "2023 March"},
    { id: 18, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795781/cdee50e784b543cf7c52100d496feb1d_a7djqr.png", alt: "Binod Memes", date: "2023 February"},
    { id: 19, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795781/cdee50e784b543cf7c52100d496feb1d_a7djqr.png", alt: "Binod Memes", date: "2023 January"},
    { id: 20, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795781/cdee50e784b543cf7c52100d496feb1d_a7djqr.png", alt: "Binod Memes", date: "2022 December"},
    { id: 21, img: "https://res.cloudinary.com/dttnhad6r/image/upload/v1720795781/cdee50e784b543cf7c52100d496feb1d_a7djqr.png", alt: "Binod Memes", date: "2022 November"}  
]

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,display: 'block',height:'45px', width:'45px', background: '#0157F0', borderRadius: '25px', marginTop: '60px', right: '10px', zIndex: 2 }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', height:'45px', width:'45px', background: '#0157F0', borderRadius: '25px', marginTop: '60px', left: '10px', zIndex: 2 }}
      onClick={onClick}
    />
  );
};

const ContinuousCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
    <Slider {...settings}>
        {data.map(each => (
            <div key={each.id} className='img-container'>
                <div className='line-container'>
                <div className='date-container'>{each.date}</div>
                <div className='dashed-line'>---------------</div>
                </div>
                <h1 className='caption'>{each.alt}</h1>
                <img src={each.img} alt={each.alt} className='img-logo'/>
            </div>)
        )}
    </Slider>
    </div>
  );
};

export default ContinuousCarousel;