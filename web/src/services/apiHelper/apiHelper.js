import Axios from "axios";

export const host = "http://5.45.118.116:11004";

export async function getAllSingers(params) {
     return Axios.get(`${host}/singers`, {params})
                    .then(res => res.data);
}

export async function getSingerById(id) {
     return Axios.get(`${host}/singers/${id}`, { params: { id } })
                    .then(res => res.data);
}