import "./MovieRow.css";
import React from "react";

const ListMovieRow = (props) => {
    return (
        <div className="movieRow">
            <h2>{props.title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {props.items.data.results.length > 0 && props.items.data.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.original_name}></img>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ListMovieRow;
