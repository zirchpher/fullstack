import * as homePages from "./main.js";

searchFormBtn.addEventListener('click', () => {
    const input = (searchFormInput.value).trim();
    const movieToSearch = input.replaceAll(" ", "-");
    location.hash = `#search=${movieToSearch}`;
});

trendingBtn.addEventListener('click', () => location.hash = "#trends");
arrowBtn.addEventListener('click', () => window.history.back());
// arrowBtn.addEventListener('click', () => location.hash = "#home");

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    const hash = location.hash;

    if (hash.startsWith("#trends")) {
        trendsPage();
    }

    else if (hash.startsWith("#search=")) {
        searchPage();
    }

    else if (hash.startsWith("#movie=")) {
        moviePage();
    }

    else if (hash.startsWith("#category=")) {
        categoryPage();
    }

    else {
        homePage();
    }

    // Para que la página cargue con el scroll en la parte superior

    // Forma 1
    window.scrollTo(0, 0, 'smooth');

    // Forma 2
    // window.scroll({
    //     top: 0,
    //     behavior: 'smooth'
    // });
}

function trendsPage() {
    console.log("trendsPage!!");

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    headerCategoryTitle.innerHTML = 'Tendencias';

    homePages.showTrendingMovies();
}

function searchPage() {
    console.log("Search!!");

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    let [urlHash, query] = location.hash.split("=");
    query = query.replaceAll("-", " ");
    homePages.getMoviesBySearch(query);
}

function moviePage() {
    console.log("moviePage!!");

    headerSection.classList.add('header-container--long');
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');

    let [urlHash, movieId] = location.hash.split("=");
    movieId = parseInt(movieId);
    homePages.getMovieDetail(movieId);
}

function categoryPage() {
    console.log("Categories!!")

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [urlHash, idAndName] = location.hash.split("=");
    const [categoryName, categoryId] = idAndName.split("_");
    const categoryTitle = categoryName.replaceAll("%20", " "); // TV%20Movie => TV Movie

    headerCategoryTitle.innerText = categoryTitle;
    homePages.getMoviesByCategory(categoryId);
}

function homePage() {
    console.log("Home!!")

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    homePages.getTrendingMovies();
    homePages.getCategoriesMovies();
}