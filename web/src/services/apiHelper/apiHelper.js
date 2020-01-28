export const host = "http://localhost:11003";

export async function getAllSingers(params) {
     const res = await _sendWithParams(`${host}/singers`, params);
     const body = res.json();
     
     return body;
}

export async function getSingerById(id) {
     const res = await _sendWithParams(`${host}/singers/${id}`);
     const body = res.json();
     
     return body;
}

export async function getPagesCount(limit) {
     const res = await _sendWithParams(`${host}/singers/pagesCount`, { limit });
     const body = res.json();
     
     return body;
}

let n = 0;

function _sendWithParams(furl, params) {
     if(params) Object.keys(params)
          .forEach(key => { if(!params[key]) delete params[key] });

     let url = new URL(furl);
     url.search = new URLSearchParams(params).toString();


     return fetch(url, {
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
     });
}