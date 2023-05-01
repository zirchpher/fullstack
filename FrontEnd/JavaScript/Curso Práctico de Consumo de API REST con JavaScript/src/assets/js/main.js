import * as tmdbApi from './basic_API_data/the-movie-db.js';

console.log("Estas en main");

const http = axios.create({
    baseURL: tmdbApi.BASE_API,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        api_key: tmdbApi.API_KEY,
        'language': 'es-PE',
    }
});

// Helpers
async function displayMoviesOnScreen({
    sectionHtml = undefined,
    data = undefined,
}) {
    sectionHtml.innerHTML = '';
    data.forEach(movie => {
        // Aquí va el contenido de las películas
        const movieConteiner = document.createElement('div');
        movieConteiner.classList.add('movie-container');
        movieConteiner.addEventListener("click", () => {
            location.hash = `#movie=${movie.id}`;
        });

        // Aquí va la imagen de la películas
        const moviePhoto = document.createElement('img');
        moviePhoto.classList.add('movie-img');
        moviePhoto.alt = `${movie.title}`;
        moviePhoto.src = `${tmdbApi.BASE_API_IMAGE_URL}${movie.poster_path}`;

        // Metiendo los elementos hijos a su elemento contenedor
        movieConteiner.appendChild(moviePhoto);
        sectionHtml.appendChild(movieConteiner);
    });
}

async function displayCategoriesOnScreen({
    sectionHtml = undefined,
    data = undefined,
}) {
    /*
    * Como se debe pintar cada género en home:
        <article class="categoriesPreview-list">
            <div class="category-container">
                <h3 id="id28" class="category-title">Romance</h3>
            </div>
        </article>
     */
    sectionHtml.innerHTML = '';
    data.forEach(genre => {
        // Aquí va el contenedor de las categorías
        const categoryConteiner = document.createElement('div');
        categoryConteiner.classList.add('category-container');

        // Aquí va la categoría
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', `id${genre.id}`);
        categoryTitle.addEventListener("click", () => {
            location.hash = `#category=${genre.name}_${genre.id}`;
        });
        // Forma 1
        categoryTitle.textContent = `${genre.name}`;

        // Forma 2
        // const categoryTitleText = document.createTextNode(`${genre.name}`);
        // categoryTitle.appendChild(categoryTitleText);

        // Mitiendo los elementos hijos a su elemento contenedor
        categoryConteiner.appendChild(categoryTitle);
        sectionHtml.appendChild(categoryConteiner);
    });
}


// Llamando a la API
async function getTrendingMovies() {
    const data = await http.get('/trending/movie/day');
    const trendingMovies = data.data.results;

    /*
    * Como se debe pintar cada pelicula en trending:
        <article id="trendingPreview-movieList" class="trendingPreview-movieList">
            <div class="movie-container">
                <img src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"   class="movie-img"
                    alt="Nombre de la película" />
            </div>
        </article>
     */

    displayMoviesOnScreen({
        sectionHtml: trendingMoviesPreviewList,
        data: trendingMovies,
    });
}

async function getCategoriesMovies() {
    const { data, status, ...others } = await http.get('/genre/movie/list');
    const genreMovies = data.genres;

    displayCategoriesOnScreen({
        sectionHtml: categoriesPreviewList,
        data: genreMovies,
    });
}

async function getMoviesByCategory(categoryId) {
    const data = await http.get('/discover/movie', {
        params: { with_genres: categoryId }
    });

    const movies = data.data.results;

    displayMoviesOnScreen({
        sectionHtml: genericSection,
        data: movies,
    });
}

async function getMoviesBySearch(query) {
    const data = await http.get('/search/movie', {
        params: { query }
    });

    const movies = data.data.results;

    displayMoviesOnScreen({
        sectionHtml: genericSection,
        data: movies,
    });
}

async function showTrendingMovies() {
    const data = await http.get('/trending/movie/day');
    const trendingMovies = data.data.results;

    displayMoviesOnScreen({
        sectionHtml: genericSection,
        data: trendingMovies,
    });
}

async function getMovieDetail(id) {
    const { data: movie } = await http.get(`/movie/${id}`);

    movieDetailTitle.textContent = movie.title;
    movieDetailDescription.textContent = movie.overview;
    movieDetailScore.textContent = movie.vote_average;

    const movieImg = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    headerSection.style.backgroundImage = `
        linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.35) 19.27%,
            rgba(0, 0, 0, 0) 29.17%
        ),
        url(${movieImg})
    `;

    displayCategoriesOnScreen({
        sectionHtml: movieDetailCategoriesList,
        data: movie.genres,
    });

    getRelatedMoviesById(id);
}

async function getRelatedMoviesById(id) {
    const { data } = await http.get(`/movie/${id}/similar`);
    const relatedMovies = data.results;
    console.log(data);

    displayMoviesOnScreen({
        sectionHtml: relatedMoviesContainer,
        data: relatedMovies,
    });
}

export {
    getTrendingMovies,
    getCategoriesMovies,
    getMoviesByCategory,
    getMoviesBySearch,
    showTrendingMovies,
    getMovieDetail,
    getRelatedMoviesById,
};