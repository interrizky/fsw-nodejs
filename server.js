// console.log("Hello From Server.JS")

// Import Modules 
const Calculate = require('./modules/luas') 
// console.log(Luas) 
 
console.log("Luas Segitiga: " + Calculate.LuasSegitiga(10 ,2)); 
console.log("Luas Keliling: " + Calculate.KelilingSegitiga(3,3,3)); 
console.log("Luas Jajar Genjang-1: " +Calculate.LuasJajarGenjang(4 ,3)); 
console.log("Luas Jajar Genjnag-2: " + Calculate.KelilingJajarGenjang(2,3,4,2)); 
console.log("Luas Persegi: " + Calculate.LuasPersegi(5 ,5)); 
console.log("Keliling Persegi: " + Calculate.KelilingPersegi(8)); 
console.log("Luas Lingkaran: " + Calculate.LuasLingkaran(1)); 
console.log("Keliling Lingkaran: " + Calculate.KelilingLingkaran(1)); 
console.log("Luas Belah Ketupat: " + Calculate.LuasBelahKetupat(3,6,3,2)); 
console.log("Keliling Belah Ketupat: " + Calculate.KelilingBelahKetupat(4,4,4,4)); 
console.log("Luas Layang-Layang: " + Calculate.KelilingLayanglayang(3,2,1,4)); 
console.log("Keliling Layang-Layang: " + Calculate.KelilingLayanglayang(3,3,6,8)); 
console.log("Luas Trapesium: " + Calculate.LuasTrapesium(3,8,6)); 
console.log("Keliling Trapesium: " + Calculate.KelilingTrapesium(2,5,4,4));