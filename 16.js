function recur(i){
    if (i<=100){
        console.log(i)
        recur(++i)
        console.log(i)
    }
}

recur(99)