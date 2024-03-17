import './PropertyList.css';
import hotelImg from '../../assets/hotel.jpg';
import apartmentImg from '../../assets/apartment.jpg';
import resortImg from '../../assets/resort.jpg';
import villaImg from '../../assets/villa.jpg';
import cabinImg from '../../assets/cabin.jpg';

const PropertyList = () => {
    return (
        <div className="propertyList">
            <div className="propertyListItem" title="Property">
                <img src={hotelImg} alt="hotel image" />
                <div className="propertyListTitles">
                    <h3>Hotels</h3>
                    <h4>233 hotels</h4>
                </div>
            </div>
            <div className="propertyListItem" title="Property">
                <img src={apartmentImg} alt="apartment image" />
                <div className="propertyListTitles">
                    <h3>Apartments</h3>
                    <h4>233 apartments</h4>
                </div>
            </div>
            <div className="propertyListItem" title="Property">
                <img src={resortImg} alt="resort image" />
                <div className="propertyListTitles">
                    <h3>Resorts</h3>
                    <h4>233 resorts</h4>
                </div>
            </div>
            <div className="propertyListItem" title="Property">
                <img src={villaImg} alt="villa image" />
                <div className="propertyListTitles">
                    <h3>Villas</h3>
                    <h4>233 villas</h4>
                </div>
            </div>
            <div className="propertyListItem" title="Property">
                <img src={cabinImg} alt="cabin image" />
                <div className="propertyListTitles">
                    <h3>Cabins</h3>
                    <h4>233 cabins</h4>
                </div>
            </div>
        </div>
    );
};

export default PropertyList;
