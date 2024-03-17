import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './List.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    return (
        <>
            <Navbar />
            <Header type="list" />
            <main className="listContainer">
                <div className="listWrapper">
                    <aside className="listSearch">
                        <h2 className="listSearchTitle">Search</h2>
                        <div className="listSearchItem">
                            <label htmlFor="destination">Destination</label>
                            <input
                                type="text"
                                name="destination"
                                id="destination"
                                placeholder={destination}
                            />
                        </div>
                        <div className="listSearchItem">
                            <label htmlFor="date">Check-in Date</label>
                            <span
                                id="date"
                                onClick={() => setOpenDate(!openDate)}
                            >{`${format(
                                date[0].startDate,
                                'MM/dd/yyyy'
                            )} to ${format(
                                date[0].endDate,
                                'MM/dd/yyyy'
                            )}`}</span>
                            {openDate && (
                                <DateRange
                                    onChange={(item) =>
                                        setDate([item.selection])
                                    }
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            )}
                        </div>
                        <div className="listSearchItem">
                            <label>Options</label>
                            <div className="listSearchOptions">
                                <div className="listSearchItemOptionItem">
                                    <span className="listSearchItemOptionItemText">
                                        Min price <small>per night</small>
                                    </span>
                                    <input
                                        type="number"
                                        min={0}
                                        className="listSearchOptionInput"
                                    />
                                </div>
                                <div className="listSearchItemOptionItem">
                                    <span className="listSearchItemOptionItemText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input
                                        type="number"
                                        min={0}
                                        className="listSearchOptionInput"
                                    />
                                </div>
                                <div className="listSearchItemOptionItem">
                                    <span className="listSearchItemOptionItemText">
                                        Adult
                                    </span>
                                    <input
                                        type="number"
                                        className="listSearchOptionInput"
                                        placeholder={options.adult}
                                        min={1}
                                    />
                                </div>
                                <div className="listSearchItemOptionItem">
                                    <span className="listSearchItemOptionItemText">
                                        Children
                                    </span>
                                    <input
                                        type="number"
                                        className="listSearchOptionInput"
                                        placeholder={options.children}
                                        min={0}
                                    />
                                </div>
                                <div className="listSearchItemOptionItem">
                                    <span className="listSearchItemOptionItemText">
                                        Room
                                    </span>
                                    <input
                                        type="number"
                                        className="listSearchOptionInput"
                                        placeholder={options.room}
                                        min={1}
                                    />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </aside>
                    <section className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </section>
                </div>
            </main>
        </>
    );
};

export default List;
