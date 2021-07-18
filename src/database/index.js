'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getAllItems = () => {
    const dataAccessMethod = () => {
        let itemList = []
        _.map(db.itemsOfUserByUsername, items => {
        
        for (let idx=0; idx<items.length; idx++) {
            if(!itemList.includes(items[idx])) {
                itemList.push(items[idx])
            }
        }
        })
        

        return itemList
    }
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
    const dataAccessMethod = () => {
        // fill me in :)
        const usernamesWithSelectedItem = Object.keys(_.pickBy(db.itemsOfUserByUsername, user => user.includes(item)))        
        const usersFilteredWithItem = _.filter(db.usersById, user => usernamesWithSelectedItem.includes(user.username))
        const result = _.chain(usersFilteredWithItem)
        .countBy('age')
        .map((value,key) =>{            
            return {age:key,count:value}
        })
        
        return result
    }
    return mockDBCall(dataAccessMethod);
}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith,
    getAllItems
};
