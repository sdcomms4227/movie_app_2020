import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Detail.css";

function Detail() {
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!location.state) {
            navigate("/");
        }
    }, [location, navigate]);

    if (!location.state) {
        return <div>Loading...</div>;
    }

    const { title, year, summary, poster, genres } = location.state;
    return (
        <div className="detail">
            <img src={poster} alt={title} title={title} />
            <div className="detail__data">
                <h3 className="detail__title">{title}</h3>
                <h5 className="detail__year">{year}</h5>
                <ul className="detail__genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">{genre}</li>
                    ))}
                </ul>
                <p className="detail__summary">{summary}</p>
            </div>
        </div>
    );
}

export default Detail;