import data from './data.js';
import NavigationItem from './modules/navigation-item.js';

const Container = {
  NAV: document.querySelector('.nav__list'),
};

const renderNavigation = (container, navigationData) => {
  navigationData.forEach((data) => {
    const navigationItem = new NavigationItem(data);
    container.appendChild(navigationItem.render());
  });
};

renderNavigation(Container.NAV, data);
