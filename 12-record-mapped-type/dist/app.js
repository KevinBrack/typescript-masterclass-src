// function foo(bar: string | number) {
//   if (typeof bar === 'string') {
//     // string
//     return bar.toUpperCase();
//   }
//   // number
//   if (typeof bar === 'number') {
//     return bar.toFixed(2);
//   }
// }
var Song = /** @class */ (function () {
    function Song(title, duration) {
        this.title = title;
        this.duration = duration;
    }
    return Song;
}());
function getSongDuration(item) {
    if (typeof item.duration === 'string') {
        return item.duration;
    }
    var duration = item.duration;
    var minutes = Math.floor(duration / 60000);
    var seconds = (duration / 1000) % 60;
    return minutes + ":" + seconds;
}
var songDurationFromString = getSongDuration(new Song('Wonderful Wonderful', '05:31'));
console.log(songDurationFromString);
var songDurationFromMS = getSongDuration(new Song('Wonderful Wonderful', 330000));
console.log(songDurationFromMS);
