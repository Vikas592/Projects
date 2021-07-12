function Stopwatch(){
    let startTime, stopTime, running, duration = 0;

    this.start = function(){
        if(!running){
            startTime = new Date();
            running = true;
        }
        else {
            throw new Error('Stopwatch already runnning!');
        }
    }

    this.stop = function(){
        if(!running){
            throw new Error('Stopwatch not started yet!');
        }
        else{
            stopTime = new Date();
            running = false;
            duration = (stopTime.getTime()-startTime.getTime() )/ 1000
        }
    }

    this.reset = function(){
        duration = 0;
        running = false;
        startTime = 0;
        stopTime = 0;
    }
    
    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        }
    })
}

const sw = new Stopwatch();
console.log(sw.duration);
console.log(sw.start());
console.log(sw.stop());
console.log(sw.duration);
