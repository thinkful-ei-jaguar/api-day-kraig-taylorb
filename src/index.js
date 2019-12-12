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
    items.forEach((item) => store.addItem(item));
    shoppingList.render();

    const item = store.items[0];
console.log('current name: ' + item.name);
store.findAndUpdate(item.id, { name: 'barbaz' });
console.log('new name: ' + item.name);


  });
  // api.getItems()
  //   .then(res => res.json())
  //   .then(res => console.log(res));
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
