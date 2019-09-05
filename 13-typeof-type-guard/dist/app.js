var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.bar = function () { };
    return Foo;
}());
var bar = new Foo();
// console.log(bar instanceof Foo);
// console.log(Object.getPrototypeOf(bar) === Foo.prototype);
var Song = /** @class */ (function () {
    function Song(title, duration) {
        this.title = title;
        this.duration = duration;
    }
    return Song;
}());
var Playlist = /** @class */ (function () {
    function Playlist(name, songs) {
        this.name = name;
        this.songs = songs;
    }
    return Playlist;
}());
function getItemName(item) {
    if (item instanceof Song) {
        return item.title;
    }
    return item.name;
}
var songName = getItemName(new Song('Wonderful Wonderful', 300000));
console.log('Song name:', songName);
var playlistName = getItemName(new Playlist('The Best Songs', [new Song('The Man', 300000)]));
console.log('Playlist name:', playlistName);
