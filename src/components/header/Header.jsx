import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import {
    faBed,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState } from 'react';
import { format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
    const [destination, setDestination] = useState('');
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    function handleOption(option, type) {
        if (type === 'decrease') {
            const newNum = options[option] - 1;
            const isMinimum = newNum < 0;

            setOptions({
                ...options,
                [option]: isMinimum ? options[option] : newNum,
            });
        } else if (type === 'increase') {
            setOptions({ ...options, [option]: options[option] + 1 });
        }
    }

    const navigate = useNavigate();
    const handleSearch = () => {
        setOpenDate(false);
        setOpenOptions(false);
        navigate('/hotels', { state: { destination, date, options } });
    };

    return (
        <header className="header">
            <section
                data-type={type === 'list' && 'list'}
                className="headerContainer"
            >
                <div className="headerList">
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />

                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== 'list' && (
                    <>
                        <h1 className="headerTitle">
                            A lifetime of discounts? It's Genius.
                        </h1>
                        <p className="headerDesc">
                            Get rewarded for your travels - unlock instant
                            saving of 10% or more with free Boooooking account
                        </p>
                        <button className="headerBtn">
                            Sign In / Register
                        </button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon
                                    icon={faBed}
                                    className="headerIcon"
                                    style={
                                        destination !== '' && { color: 'black' }
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Where are you going"
                                    className="headerSearchInput"
                                    value={destination}
                                    onChange={(e) =>
                                        setDestination(e.target.value)
                                    }
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon
                                    icon={faCalendarDays}
                                    className="headerIcon"
                                />
                                <span
                                    onClick={() => setOpenDate(!openDate)}
                                    className="headerSearchText"
                                >{`${format(
                                    date[0].startDate,
                                    'MM/dd/yyyy'
                                )} to ${format(
                                    date[0].endDate,
                                    'MM/dd/yyyy'
                                )}`}</span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) =>
                                            setDate([item.selection])
                                        }
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"
                                    />
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon
                                    icon={faPerson}
                                    className="headerIcon"
                                />
                                <span
                                    className="headerSearchText"
                                    onClick={() => setOpenOptions(!openOptions)}
                                >
                                    {`${options.adult} adult • ${options.children} children • ${options.room} room`}
                                </span>
                                {openOptions && (
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">
                                                Adult
                                            </span>
                                            <div className="optionCounter">
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() =>
                                                        handleOption(
                                                            'adult',
                                                            'decrease'
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                                                    {options.adult}
                                                </span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() =>
                                                        handleOption(
                                                            'adult',
                                                            'increase'
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">
                                                Children
                                            </span>
                                            <div className="optionCounter">
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() =>
                                                        handleOption(
                                                            'children',
                                                            'decrease'
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                                                    {options.children}
                                                </span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() =>
                                                        handleOption(
                                                            'children',
                                                            'increase'
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">
                                                Room
                                            </span>
                                            <div className="optionCounter">
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() =>
                                                        handleOption(
                                                            'room',
                                                            'decrease'
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                                                    {options.room}
                                                </span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() =>
                                                        handleOption(
                                                            'room',
                                                            'increase'
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <button
                                    className="headerBtn"
                                    onClick={handleSearch}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </section>
        </header>
    );
};

export default Header;
