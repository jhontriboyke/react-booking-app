import './Hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import room1 from '../../assets/room-1.jpg';
import room2 from '../../assets/room-2.jpg';
import room3 from '../../assets/room-3.jpg';
import room4 from '../../assets/room-4.jpg';
import room5 from '../../assets/room-5.jpg';
import room6 from '../../assets/room-6.jpg';

import { useState } from 'react';
import SlideShow from '../../components/slideShow/SlideShow';

const hotelImages = [room1, room2, room3, room4, room5, room6];

const Hotel = () => {
    const [openSlideshow, setOpenSlideshow] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleSlideshow = (index) => {
        setOpenSlideshow(!openSlideshow);
        setSelectedId(index);
    };

    const handleExitSlideshow = () => {
        setOpenSlideshow(!openSlideshow);
    };

    return (
        <>
            {openSlideshow && (
                <SlideShow
                    hotelImages={hotelImages}
                    handleExitSlideshow={handleExitSlideshow}
                    selectedId={selectedId}
                />
            )}
            <Navbar />
            <Header type="list" />
            <main className="hotelContainer">
                <div className="hotelWrapper">
                    <button className="hotelBtn">Reserve or Book Now!</button>
                    <section className="hotelText">
                        <h1 className="hotelTitle">Grand Hotel</h1>
                        <div className="hotelAddress">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>Krakow, United States 123 Street</span>
                        </div>
                        <span className="hotelDistance">
                            Excellent location - 500m from center
                        </span>
                        <span className="hotelPriceHighlight">
                            Book a stay over $114 at this property and get a
                            free airport taxi
                        </span>
                    </section>
                    <div className="hotelImages">
                        {hotelImages.map((hotelImage, index) => (
                            <div
                                title="Hotel Room"
                                key={index}
                                onClick={() => handleSlideshow(index)}
                                className="hotelImageWrapper"
                            >
                                <img src={hotelImage} alt="hotel" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <section className="hotelDetailsText">
                            <h1 className="hotelTitle">
                                Stay in the heart of Krakow
                            </h1>
                            <p className="hotelDesc">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Laudantium eum aperiam,
                                dolorem reprehenderit excepturi eveniet porro
                                doloribus ipsa veritatis! Vel ipsa veniam qui
                                adipisci. Maxime quos odit enim? Error
                                laudantium officiis, commodi accusantium quis
                                sit distinctio odit quia! Maxime dolore
                                similique consectetur praesentium accusantium
                                laborum molestias, culpa eveniet quae ea Lorem
                                ipsum dolor sit amet consectetur, adipisicing
                                elit. Blanditiis, amet a quam libero consectetur
                                facere doloremque omnis ad tenetur tempore
                                excepturi accusantium adipisci aspernatur? Velit
                                aut quidem voluptatum dolore aperiam iste
                                debitis corrupti magnam cupiditate perspiciatis
                                voluptas, nulla a voluptatibus reprehenderit
                                fuga eos, beatae at optio blanditiis temporibus
                                suscipit! Quae!
                            </p>
                        </section>
                        <section className="hotelDetailsPrice">
                            <h2>Perfect for a 9-night stay!</h2>
                            <span>
                                Located in the real heart of Krakow, this
                                property has an excellent location score of 9.8
                            </span>
                            <h3>
                                <b>$945</b> (9 nights)
                            </h3>
                            <button>Reserve or Book Now!</button>
                        </section>
                    </div>
                </div>
            </main>
            <MailList />
            <Footer />
        </>
    );
};

export default Hotel;
