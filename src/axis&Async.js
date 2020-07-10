// Axios

import axios from 'axios';

class Api {
    static async getUserInfo(username) {

        try {
            const response = await axios.get(`http://api.github.com/users/${username}`)
            console.log(response);
        } catch (error) {
            console.warn('Nao existe!');

        }
    }
}

Api.getUserInfo('AllanMazini');






// Async e await

const minhaPromiseOK = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000);
});

const minhaPromise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('Alter. 2')}, 2000);
});

const minhaPromise3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('Alter. 3')}, 2000);
});

const executaPromise = async () => {
    console.log(await minhaPromiseOK());
    console.log(await minhaPromise2());
    console.log(await minhaPromise3());
};

executaPromise();

