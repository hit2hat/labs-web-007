const BACKEND = 'http://localhost:8080';

const request = (method, path, params = {}) => {
    return fetch(`${BACKEND}/${path}`, {
        method,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        ...(method !== 'GET' ? { body: new URLSearchParams(params) }: {})
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.error) {
                throw new Error(res.error.message);
            }

            return res;
        })
};

const API = {
    getAllGuides: () => request('GET', 'guide'),
    createGuideById: (fields) => request('POST', 'guide', fields),
    editGuideById: (id, fields) => request('PUT', `guide/${id}`, fields),
    deleteGuideById: (id) => request('DELETE', `guide/${id}`),
};

export default API;