
// 2069. Walking Robot Simulation II

/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function(width, height) {
    this.width = width;
    this.height = height;
    this.currentPos = [0, 0];
    this.currentDirection = "East";
    this.directionMovement = {
        "East": [1,0],
        "North": [0,1],
        "West": [-1,0],
        "South": [0,-1]
    }
};

/** 
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function(num) {
    if(num === null) {
        return
    }
    let pos = [...this.currentPos]
    const totalSteps = ((this.width - 1) + (this.height - 1)) * 2
    let steps = num % totalSteps

    if(steps === 0 && num > 0) {
        steps = totalSteps
    }
    
    while(steps > 0) {
        if(this.currentDirection === "East" && pos[0] === this.width - 1) {
            this.currentDirection = "North"
        } else if(this.currentDirection === "North" && pos[1] === this.height - 1) {
            this.currentDirection = "West"
        } else if (this.currentDirection === "West" && pos[0] === 0) {
            this.currentDirection = "South"
        } else if (this.currentDirection === "South" && pos[1] === 0){
            this.currentDirection = "East"
        }
        pos[0] += this.directionMovement[this.currentDirection][0];
        pos[1] += this.directionMovement[this.currentDirection][1];
        this.currentPos = pos;
        steps--;
        
    }
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
    return this.currentPos
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
    return this.currentDirection
};


 var obj = new Robot(20, 13)
 obj.step(12)

 console.log(obj.getPos())
console.log(obj.getDir())
obj.step(21)
// obj.step(1)
//  console.log(obj.getPos())
// console.log(obj.getDir())
// obj.step(2)
console.log(obj.getPos())
console.log(obj.getDir())
obj.step(17)
console.log(obj.getPos())
console.log(obj.getDir())
// obj.step(4)
// console.log(obj.getPos())
// console.log(obj.getDir())


// output
// (2) [12, 0]
// East
// (2) [17, 12]
// West
// (2) [0, 12]
// West
 