function f1(name) {
    return function f2(surname) {
        return name + " " + surname
    }
}
f2_Vova = f1("Vova")
console.log(f2_Vova("Beliaeve"))