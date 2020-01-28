let singers = [];

export function hasSinger(id) {
    return singers.findIndex(singer => singer.id == id) !== -1;
}

export function addSinger(singer) {
    const index = singers.findIndex(v => v.id == singer.id);
    
    if(index != -1) {
        singers[index] = singer;
    }else {
        singers.push(singer);
    }
}

export function getSinger(id) {
    return singers.find(singer => singer.id == id);
}

export function saveSinger(singer) {
    singers.push(singer);
}
