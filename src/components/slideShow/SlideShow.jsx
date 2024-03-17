import { useState } from 'react';
import './SlideShow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';

const SlideShow = ({ hotelImages, handleExitSlideshow, selectedId }) => {
    const [selected, setSelected] = useState(0 || selectedId);

    function handleNext(e) {
        e.stopPropagation();
        if (selected > hotelImages.length - 2) {
            setSelected(0);
        } else {
            setSelected((s) => s + 1);
        }
    }

    function handlePrev(e) {
        e.stopPropagation();
        if (selected === 0) {
            setSelected(hotelImages.length - 1);
        } else {
            setSelected((s) => s - 1);
        }
    }

    return (
        <aside
            className="slideshowContainer"
            onClick={(e) => handleExitSlideshow(e)}
        >
            <div className="slideshowWrapper">
                <div
                    className="imageWrapper"
                    style={{ transform: `translateX(${-100 * selected}%)` }}
                >
                    {hotelImages.map((img) => (
                        <img src={img} />
                    ))}
                </div>
                <button className="left" onClick={(e) => handlePrev(e)}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </button>
                <button className="right" onClick={(e) => handleNext(e)}>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </button>
            </div>
        </aside>
    );
};

export default SlideShow;
