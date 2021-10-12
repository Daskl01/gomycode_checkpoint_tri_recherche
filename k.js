function disemvowel(str) {
    var diemvoweledStr = str.replace(/[aeiou]/gi,"");
    return diemvoweledStr;
}

console.log(disemvowel("la vie est belle"))