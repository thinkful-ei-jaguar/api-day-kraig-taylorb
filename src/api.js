const BASE_URL = 'https://thinkful-list-api.herokuapp.com/taylorbkraig';

function fetchListAPI (...args) {
    let error;
    return fetch (...args)
        .then(res => {
            if (!res.ok) {
                error = { code: res.status };
            }
            return res.json();
        })
        .then(data => {
            if (error) {
                error.message = data.message;
                return Promise.reject(error);
            }
        return data;
        })   
}

function getItems () {
    return fetchListAPI(`${BASE_URL}/items`);     
}

const createItem = function (name) {
    const newItem = JSON.stringify({ name });
    return fetchListAPI(`${BASE_URL}/items`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: newItem
    });

}

function updateItem (id, updateData) {
   const update = JSON.stringify(updateData); 
   return fetchListAPI(`${BASE_URL}/items/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: update
    });
};

let deleteItem = function(id){
    return fetchListAPI(`${BASE_URL}/items/${id}`, {
        method: 'DELETE',
    
   });
};


export default {
    getItems,
    createItem,
    updateItem,
    deleteItem
};