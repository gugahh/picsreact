import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.unsplash.com',

    headers: {
        Authorization: 'Client-ID TWFAgnlfLmL7vDOuIa4bmgVE7WbCWFEvcxT8tCj9OVA'
    }

});