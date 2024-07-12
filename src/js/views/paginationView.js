import View from './View';
import { RES_PER_PAGE } from '../config.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerPagination(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / RES_PER_PAGE);

    //Page one and there are other pages
    if (currPage === 1 && numPages > 1) {
      return `
      <button data-goto ='${
        currPage + 1
      }' class="btn--inline pagination__btn--next">
        <span>Page ${currPage + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    }
    //Last Page
    if (currPage === numPages && numPages > 1) {
      return `<button data-goto ='${
        currPage - 1
      }' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
          </button>`;
    }
    //Other pages
    if (currPage > 1 && currPage < numPages) {
      return `
        <button data-goto ='${
          currPage - 1
        }' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
        </button>
        <button data-goto ='${
          currPage + 1
        }' class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`;
    }
    //Page one and there are no other
    return `Page one and there are no other pages`;
  }
}

export default new PaginationView();
