import ContinuousCarousel from '../ContinuousCarousel';
import "@fontsource/poppins";
import './index.css';

function MemeEvolution() {
    return (
        <div className='memes'>
            <h1 className='memes-heading'>What Is Meme?</h1>
            <p className='memes-description'>A meme is a cultural item in the form of an image, video, phrase, or piece of text that is shared and spread rapidly across the internet. Memes often carry humorous or satirical content, and their meanings can evolve over time as they are adapted and remixed by various communities.</p>

            <p className='memes-description'>According to HubSpot, today’s social media feeds are 90% memes, a trend that is unlikely to change any time soon.</p>
            <ContinuousCarousel />
        </div>
    )
}

export default MemeEvolution;