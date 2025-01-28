// Reverse polyfill
const arr = [1, 2, 3, 4]

Array.prototype.myReverse = function (){
    let first = 0;
    let last = this.length - 1;
    while(first <= last){
        let temp = this[first];
        this[first] = this[last];
        this[last] = temp;

        first++;
        last--;
    }
    return this;
}

console.log(arr.myReverse());

// Map Polyfill