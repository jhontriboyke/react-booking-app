import './SearchItem.css';
import image from '../../assets/hotel-1.jpg';
import { Link } from 'react-router-dom';

const SearchItem = () => {
    return (
        <section className="searchItem">
            <div className="searchItemImg">
                <img src={image} alt="" />
            </div>
            <div className="searchItemDesc">
                <h3 className="descHeading">Tower Street Apartments</h3>
                <p className="descLocation">500m from center</p>
                <p className="descBonus">Free airport taxi</p>
                <p className="descInterior">
                    Studio Apartment with Air conditioning
                </p>
                <p className="descFeatures">
                    Entire studio • 1 bathroom • 21m<sup>2</sup> 1 full bed
                </p>
                <p className="descCancelOpt">Free cancellation</p>
                <p className="descCancelDesc">
                    You can cancel later, so lock in this great price today!
                </p>
            </div>
            <div className="searchItemDetail">
                <div className="detailRating">
                    <span className="ratingText">Excellent</span>
                    <button className="ratingNumber">8.9</button>
                </div>
                <div className="detailPrice">
                    <span className="priceNumber"> $123</span>
                    <span className="priceText">includes taxes and fees</span>
                    <Link
                        to="/hotels/:id"
                        className="priceButton"
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            });
                        }}
                    >
                        See availability
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SearchItem;
