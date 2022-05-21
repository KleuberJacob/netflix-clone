import "./FeaturedMovie.css";
import React from "react";

const FeaturedMovie = ({item}) => {
    return (
        <section className="featured" style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.data.backdrop_path})`
            }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name"> {item.data.original_name} </div>
                    <div className="featured--info">
                        <div className="featured--points">{item.data.vote_average}</div>
                        <div className="featured--year">{item.data.first_air_date}</div>
                        <div className="featured--seasons">{item.data.number_of_seasons} Temporada{item.data.number_of_seasons > 1 ? "s" : ""}</div>
                    </div>
                    <div className="featured--description">{item.data.overview}</div>
                    <div className="featured--buttons">

                    </div>
                    <div className="featured--genres">{}</div>
                </div>
            </div>            
        </section>
    )
};

export default FeaturedMovie;
