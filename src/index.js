import $ from 'jquery';
import api from './api';
import store from './store';
import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

const main = function () {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      const item = items[0];
      return api.updateItem(item.id, { name: 'foobar' });
    })
    .then(res => res.json())
    .then(() => console.log('updated!'));

  api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
  // api.getItems()
  //   .then(res => res.json())
  //   .then(res => console.log(res));
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
