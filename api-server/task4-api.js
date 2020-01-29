const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");

const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./nice.db");

app.use(cookieParser());

app.use("*", (req, res, next) => {
     res.setHeader("Access-Control-Allow-Origin", "*");

     next();
});
app.use(express.static("public"));

app.get("/singers", (req, res) => {
     _getSortedSingers(req.query, (singers) => {
          _getCountSingers(req.query, (singersCount) => {
               res.send({
                    singers,
                    singersCount
               });
          });
     })
});

app.get("/singers/:id", (req, res) => {
     
     const { id } = req.params;
     let singer = { };
     db.get("SELECT * FROM singers WHERE id=?", [ id ], (err, row) => {
          if(err) return console.log(err);
          
          singer.id = row.id;
          singer.name = row.name;
          singer.type = row.type;
          singer.year = row.year;
          singer.albums = []

          db.all("SELECT * FROM singers_albums WHERE singer_id=?", [id], (err, rows) => {
               if(rows.length == 0) {
                    res.send(singer);
                    return;
               }
               rows.forEach((album, index) => {
                    singer.albums.push(album); 

                    album.songs = [];

                    db.all("SELECT * FROM singers_songs WHERE singer_id=? AND album_id=?", 
                    [ id, album.id], (err, songs) => {
                         songs.forEach(song => {
                              album.songs.push(song);
                         });

                         if(index === rows.length - 1) {
                              res.send(singer);
                         }
                    });
               });
          });
     });
});

function _getSortedSingers(query, callback) {
     let { search, limit, sort, sortType = "ASC", page = 1 } = query;
     let singers = [];
     let querySingers = `select 
                              m.id as id,
                              m.name as name, 
                              m.year as year, 
                              count(s.id) as albumsCount
                         from singers m left join
                              singers_albums s
                              on m.id = s.singer_id
                         WHERE m.name LIKE ?
                         group by m.id, m.name
                         order by ${`${sort}`} ${sortType}
                         limit ${(page - 1) * limit},${limit}`;
     let queryParams = [
         `%${search ? search : ""}%`
     ];
     db.all(querySingers, queryParams, (err, singersRows) => {
          if(err) return console.log(err, querySingers);
          
          singers = singersRows;

          callback(singers);
     });
} 

function _getCountSingers(query, callback) {
     let { search } = query;
     let querySingers = `SELECT COUNT(id)
                         FROM singers 
                         WHERE name LIKE ?`;
     let queryParams = [
         `%${search ? search : ""}%`
     ];
     db.get(querySingers, queryParams, (err, count) => {
          if(err) return console.log(err, querySingers);
          callback(count['COUNT(id)']);
     });
}

app.listen(11004, (err) => {
     if(err) return console.log(err);
     console.log("Listening 11004 port...");
});