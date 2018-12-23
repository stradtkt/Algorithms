console.log(['Hello', 'World'].join(' '))
console.log(Array.prototype.call(['Hello', 'World'], ' '));
//These are the same

function Drum() {
    this.noise = 'boom';
    this.duration = 1000; // makes the duration for 1s 
    this.goBoom = function() {console.log(this.noise)}; // this is the action when this is called
}
var drum = new Drum(); // make a new instance
setInterval(drum.goBoom.bind(drum), drum.duration); // after one second the drum makes the noise boom

