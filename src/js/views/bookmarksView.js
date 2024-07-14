import View from './View';
import icons from '../../img/icons.svg';

class BookMarksView extends View {
  _parentElement = document.querySelector('.bookmarks');
  _errorMessage = 'Bharosa rakh bhai m sab sahi kar sakta hun!';
  _message = 'Find you Faviorite Recipies to Bookmark.';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join();
  }
  _generateMarkupPreview(result) {
    const id = window.location.hash.slice(1);

    return ` 
          <li class="preview">
            <a class="preview__link" ${
              result.id === id ? 'preview__link--active' : ''
            } href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image} " alt="${result.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>
                <div class="preview__user-generated ${
                  result.key ? '' : 'hidden'
                }">
                <svg>
                  <use href="${icons}#icon-user"></use>
                </svg>
            </div>
              </div>
            </a>
          </li>`;
  }
}

export default new BookMarksView();
//   <svg> // <div class="preview__user-generated">
//     <use href="${icons}#icon-user"></use>
//   </svg>
// </div>
