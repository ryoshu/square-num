function square(n) {
    let k = 0;
    while(true) {
        if(k === n*n) {
            return k;
        }
        k++;
    }
}

module.exports = square