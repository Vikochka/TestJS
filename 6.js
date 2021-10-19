class ChangeIt {
    static doIt(z = []) {
        z[0] = 0
    }
}

class TestIt {
    static main() {
        let myArray = [1, 2, 3, 4, 5]
        ChangeIt.doIt(myArray)
        for (let i = 0; i < myArray; i++) {
            console.log(myArray[i] + " ")
        }
    }
}

