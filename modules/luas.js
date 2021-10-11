const LuasSegitiga = (a, b) => { 
    return a * b / 2 
} 
 
const KelilingSegitiga = (a, b, c) => { 
    return a + b + c 
} 
 
const LuasPersegi = (a, b) => { 
    return a * b 
} 
 
const KelilingPersegi = (s) => { 
    return 4 * s 
} 
 
const LuasPersegiPanjang = (p, l) => { 
    return p * l 
} 
 
const KelilingPersegiPanjang = (p ,l) => { 
    return (2 * (p + l)) 
} 
 
const LuasJajarGenjang = (a , t) => { 
    return ((a * t) /2) 
} 
 
const KelilingJajarGenjang = (a, b, c ,d) => { 
    return a + b + c + d 
} 
 
const LuasBelahKetupat = (d1 , d2) => { 
    return ((d1*d2)/2) 
} 
 
const KelilingBelahKetupat = (a, b, c ,d) => { 
    return a + b + c + d 
} 
 
const LuasLayanglayang = (d1 ,d2) => { 
    return ((d1*d2)/2) 
} 
const KelilingLayanglayang = (a, b, c ,d) => { 
    return a + b + c + d 
} 
 
const LuasTrapesium = (a ,b, t) => { 
    return ((a + b) * t) /2 
} 
 
const KelilingTrapesium = (a, b, c ,d) => { 
    return a + b + c + d 
} 
 
const LuasLingkaran = (a) => { 
    return (22/7) * a * a 
} 
const KelilingLingkaran = (a) => { 
    return (2 * (22/7)) * a 
} 
 
// Export Modules  
// module.exports = LuasSegitiga // Hanya 1 Function

// Modules kalau manggil banyak pakai export 
exports.LuasPersegi = LuasPersegi 
exports.LuasSegitiga = LuasSegitiga 
exports.LuasPersegiPanjang = LuasPersegiPanjang 
exports.LuasJajarGenjang = LuasJajarGenjang 
exports.LuasBelahKetupat = LuasBelahKetupat 
exports.LuasTrapesium = LuasTrapesium 
exports.LuasLingkaran = LuasLingkaran 
exports.KelilingLingkaran = KelilingLingkaran 
exports.KelilingTrapesium = KelilingTrapesium 
exports.KelilingLayanglayang = KelilingLayanglayang 
exports.KelilingBelahKetupat = KelilingBelahKetupat 
exports.KelilingJajarGenjang = KelilingJajarGenjang 
exports.KelilingPersegiPanjang = KelilingPersegiPanjang 
exports.KelilingPersegi = KelilingPersegi 
exports.KelilingSegitiga = KelilingSegitiga