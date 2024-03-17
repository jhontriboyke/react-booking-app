import './FeaturedProperties.css';
import { featuredData } from './featuredData';

const FeaturedProperties = () => {
    return (
        <div className="featuredProperties">
            {featuredData.map((data) => (
                <div key={data.id} className="featuredPropertiesItem">
                    <img src={data.imageUrl} alt={data.name} />
                    <div className="featuredPropertiesRating">
                        <button
                            className={data.rating > 8 ? 'excellent' : 'good'}
                        >
                            {data.rating}
                        </button>
                        <span>{data.ratingDesc}</span>
                    </div>
                    <span className="featuredPropertiesName">{data.name}</span>
                    <span className="featuredPropertiesCity">{data.city}</span>
                    <span className="featuredPropertiesPrice">
                        Starting from ${data.price}
                    </span>
                </div>
            ))}
            {/* <div className="featuredPropertiesItem">
                <img src={hotel1Img} alt="" />
                <div className="featuredPropertiesRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
                <span className="featuredPropertiesName">
                    Aparthotel Stare Miasto
                </span>
                <span className="featuredPropertiesCity">Madrid</span>
                <span className="featuredPropertiesPrice">
                    Starting from $120
                </span>
            </div>
            <div className="featuredPropertiesItem">
                <img src={hotel1Img} alt="" />
                <div className="featuredPropertiesRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
                <span className="featuredPropertiesName">
                    Aparthotel Stare Miasto
                </span>
                <span className="featuredPropertiesCity">Madrid</span>
                <span className="featuredPropertiesPrice">
                    Starting from $120
                </span>
            </div>
            <div className="featuredPropertiesItem">
                <img src={hotel1Img} alt="" />
                <div className="featuredPropertiesRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
                <span className="featuredPropertiesName">
                    Aparthotel Stare Miasto
                </span>
                <span className="featuredPropertiesCity">Madrid</span>
                <span className="featuredPropertiesPrice">
                    Starting from $120
                </span>
            </div>
            <div className="featuredPropertiesItem">
                <img src={hotel1Img} alt="" />
                <div className="featuredPropertiesRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
                <span className="featuredPropertiesName">
                    Aparthotel Stare Miasto
                </span>
                <span className="featuredPropertiesCity">Madrid</span>
                <span className="featuredPropertiesPrice">
                    Starting from $120
                </span>
            </div> */}
        </div>
    );
};

export default FeaturedProperties;
