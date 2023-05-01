// seleccionador universal
/**
 * @param idOrClass {string}
 * @return {HTMLElement}
*/
const select = (idOrClass) => document.querySelector(idOrClass);

// Sections
const headerSection = select('#header');
const trendingPreviewSection = select('#trendingPreview');
const categoriesPreviewSection = select('#categoriesPreview');
const genericSection = select('#genericList');
const movieDetailSection = select('#movieDetail');

// Lists & Containers
const searchForm = select('#searchForm');
const trendingMoviesPreviewList = select('.trendingPreview-movieList');
const categoriesPreviewList = select('.categoriesPreview-list');
const movieDetailCategoriesList = select('#movieDetail .categories-list');
const relatedMoviesContainer = select('.relatedMovies-scrollContainer');

// Elements
const headerTitle = select('.header-title');
const arrowBtn = select('.header-arrow');
const headerCategoryTitle = select('.header-title--categoryView');

const searchFormInput = select('#searchForm input');
const searchFormBtn = select('#searchBtn');

const trendingBtn = select('.trendingPreview-btn');

const movieDetailTitle = select('.movieDetail-title');
const movieDetailDescription = select('.movieDetail-description');
const movieDetailScore = select('.movieDetail-score');