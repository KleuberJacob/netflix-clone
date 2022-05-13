import axios from 'axios';

const language = "language=pt-BR";

/* const basicReq = async (endpoint) => {
    await axios.get(`${process.env.REACT_APP_BASE_URL}${endpoint}`).then((resp) => {
        return resp
    }).catch((err) => {
        console.log(err)
    })
} */

const teste = {
    get1: async () => {
        await axios.get("https://api.themoviedb.org/3/discover/tv?with_network=213&language=pt-BR&api_key=0ccc3e1762f3e6d3b1bf71731d19c5b8").then((resp) => {
            return resp
        }).catch((err) => {
            console.log(err)
        })
    }
}

export default teste

/* const basicReq = async (endpoint) => {
    await axios.get(`${process.env.REACT_APP_BASE_URL}${endpoint}`).then((resp) => {
        return resp
    }).catch((err) => {
        console.log(err)
    })
}

const allConsults = {    
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais Netflix",
                items: await basicReq(`/discover/tv?with_network=213&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: "trending",
                title: "Recomendações para você",
                items: await basicReq(`/trending/all/week?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: "toprated",
                title: "Em Alta",
                items: await basicReq(`/movie/top_rated?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicReq(`/discover/movie?with_genres=28&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicReq(`/discover/movie?with_genres=35&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicReq(`/discover/movie?with_genres=27&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicReq(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documentário",
                items: await basicReq(`/discover/movie?with_genres=99&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            }
        ]
    }
}

export default allConsults; */
