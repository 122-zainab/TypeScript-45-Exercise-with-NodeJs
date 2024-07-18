function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined){
        album.tracks =tracks;

    }
   
    return album;

}

let album1 = make_album("Zowairiya", "Album title 1");


console.log(album1)

let album2 = make_album("Daim", "Album title 2");

console.log(album2);


let album3 = make_album("Zainab", "Album title 3", 7);
console.log(album3)
