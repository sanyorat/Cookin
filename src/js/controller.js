import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODALCLOSESEC } from './config.js';

// test local commit

// const query = document.getElementsByClassName('search__field');

///////////////////////////////////////
if (module.hot) {
  module.hot.accept();
}

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //0 update results view to mark selected search results.
    resultsView.update(model.getSearchResultsPage());

    //1. Updating the bookmark
    bookmarksView.update(model.state.bookmark);

    //2 Loading recipie
    await model.loadRecipe(id);

    //3. Rendering the recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError(error);
    console.log(error);
  }
};

const controlSearch = async function () {
  try {
    resultsView.renderSpinner();
    // 1. get search query
    const query = searchView.getQuery();
    if (!query) return;
    // 2. load search result
    await model.loadSearchResults(query);

    // 3. renderResult
    resultsView.render(model.getSearchResultsPage());
    //resultsView.render(model.state.search.results);

    //4. Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    resultsView.renderError(error);
  }
};
const controlPagination = function (page) {
  resultsView.render(model.getSearchResultsPage(page));

  //4. Render initial pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  model.updateServings(newServings);
  //recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlBookmark = function (bookmarkAction) {
  // 1. Add/Remove Bookmarks
  bookmarkAction
    ? model.addBookmark(model.state.recipe)
    : model.removeBookmark(model.state.recipe);

  // 2. Update recipe Views
  recipeView.update(model.state.recipe);

  // 3. Render Bookmarks
  bookmarksView.render(model.state.bookmark);
  if (model.state.bookmark.length === 0) bookmarksView.renderMessage();
};

const controlInitialBookmarkRender = function () {
  bookmarksView.render(model.state.bookmark);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    ///Show loading Spinner
    recipeView.renderSpinner();

    ///Uplading a recipe
    await model.uploadRecipe(newRecipe);

    ////Rendering the recipe
    recipeView.render(model.state.recipe);

    //Rendering a success Message
    addRecipeView.renderMessage();

    //Rendering bookmark
    bookmarksView.render(model.state.bookmark);

    //Change ID in the URL.
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    ///Closing the form Window
    setTimeout(function () {
      addRecipeView.toggleHiddenClass();
    }, MODALCLOSESEC);
  } catch (error) {
    addRecipeView.renderError(error.message);
  }
  location.reload();
};

const init = function () {
  bookmarksView.addHandlerRender(controlInitialBookmarkRender);
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearch);
  paginationView.addHandlerPagination(controlPagination);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerBookmark(controlBookmark);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
