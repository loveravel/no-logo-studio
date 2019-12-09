import Component from './component';

export default class NavigationItem extends Component {
  constructor(data) {
    super();
    this.title = data.title || '';
    this.filters = data.filters || [];
  }

  _getFilterItems(filterItems) {
    let filters = '';

    if (Array.isArray(filterItems)) {
      filterItems.forEach((it) => {
        filters += `<li>${it}</li>`
      });
    } else {
      filterItems.forEach((values, key) => {
        let filterValues = '';
        values.forEach((it) => {
          filterValues += `<li>${it}</li>`
        });

        filters += `<li>
          <h4>${key}</h4>
          <ul>
            ${filterValues}
          </ul>
        </li>`
      });
    }

    return filters;
  }

  get template() {
    let filters = '';
    if (this.filters) {
      this.filters.forEach((filter) => {

        filters += `<li class="filters__item filter">
          <h3>${filter.title}</h3>
          ${filter.items ? `<ul>${this._getFilterItems(filter.items)}</ul>` : ''}
        </li>`;
      });
    };

    return `
    <li class="nav__item">
      <h2 class="nav__title">${this.title}</h2>
      <ul class="nav__filters filters">
        ${filters}
      </ul>
    </li>`.trim();
  }
}
