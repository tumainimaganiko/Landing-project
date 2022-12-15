function jumpingOnClouds(c) {
    let totalJumps = 0;
    for (let i = 0; i < c.length-1; i++){
        if(c[i+2] == 0){
            totalJumps+=totalJumps
            i++
        }else {
            totalJumps++
        }
    }
    totalJumps++

}