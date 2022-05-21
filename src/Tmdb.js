import axios from 'axios';

const language = "language=pt-BR";

const basicReq = async (endpoint) => {
    const req = await axios.get(`${process.env.REACT_APP_BASE_URL}${endpoint}`)    
    return req
};

const allConsults = {    
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais Netflix",
                items: await basicReq(`/discover/tv?with_network=213&${language}&api_key=${process.env.REACT_APP_API_KEY}`) 
            },
            {
                slug: "trending", 
                title: "Recomendações para você",
                items: await basicReq(`/trending/all/week?${language}&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: "toprated",
                title: "Em Alta",
                items: await basicReq(`/movie/top_rated?${language}&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicReq(`/discover/movie?with_genres=28&${language}&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicReq(`/discover/movie?with_genres=35&${language}&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicReq(`/discover/movie?with_genres=27&${language}&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicReq(`/discover/movie?with_genres=10749&${language}&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documentário",
                items: await basicReq(`/discover/movie?with_genres=99&${language}&api_key=${process.env.REACT_APP_API_KEY}`)
            }
        ]
    },

    getDataMovieInfo: async (movieId, typeMovie) => {
        let info = {}

        if(movieId) {
            switch(typeMovie) {
                case "movie":
                    info = await basicReq(`/movie/${movieId}?${language}&api_key=${process.env.REACT_APP_API_KEY}`)
                break;
                case "tv":
                    info = await basicReq(`/tv/${movieId}?${language}&api_key=${process.env.REACT_APP_API_KEY}`)
                break;
                default:
                    info = null
                break
            }
        }

        return info;
    },

};

export default allConsults; 
