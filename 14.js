class Parent {
    static print() {
        console.log(1)
    }
}

class Child extends Parent {
    static print() {
        console.log(2)
    }
}

Child.print()