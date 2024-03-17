import './Featured.css';
import image_1 from '../../assets/image-1.jpg';
import image_2 from '../../assets/image-2.jpg';
import image_3 from '../../assets/image-3.jpg';

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem" title="Destination">
                <img src={image_1} alt="image-1" className="featuredImg" />
                <div className="featuredTitles">
                    <h3>Dublin</h3>
                    <h4>123 properties</h4>
                </div>
            </div>
            <div className="featuredItem" title="Destination">
                <img src={image_2} alt="image-2" className="featuredImg" />
                <div className="featuredTitles">
                    <h3>Austin</h3>
                    <h4>32 properties</h4>
                </div>
            </div>
            <div className="featuredItem" title="Destination">
                <img src={image_3} alt="image-3" className="featuredImg" />
                <div className="featuredTitles">
                    <h3>Kapuas</h3>
                    <h4>15 properties</h4>
                </div>
            </div>
        </div>
    );
};

export default Featured;
