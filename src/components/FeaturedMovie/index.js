import "./FeaturedMovie.css";
import React from "react";

const FeaturedMovie = ({item}) => {
    let firstDate = new Date(item.data.first_air_date);
    let genres = []
    for (let i in item.data.genres) {
        genres.push(item.data.genres[i].name)
    }

    return (
        <section className="featured" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://image.tmdb.org/t/p/original${item.data.backdrop_path})`}}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name"> {item.data.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.data.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.data.number_of_seasons} Temporada{item.data.number_of_seasons > 1 ? "s" : ""}</div>
                    </div>
                    <div className="featured--description">{item.data.overview}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.data.id}`} type="button" className="viewButton">&#9654; Assistir</a>
                        <a href={`/list/add/${item.data.id}`} type="button" className="myListButton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>            
        </section>
    )
};

export default FeaturedMovie;
