import "./MovieRow.css";
import React, { useState } from "react";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const ListMovieRow = (props) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0){
            x = 0
        }
        setScrollX(x)
    };

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = props.items.data.results.length * 150
        if( (window.innerWidth - listW) > x ){
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    };

    return (
        <div className="movieRow">
            <h2>{props.title}</h2>
            <div className="movieRow--before" onClick={() => {handleLeftArrow()}}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--next" onClick={() => {handleRightArrow()}}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: props.items.data.results.length * 150
                }}>
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
