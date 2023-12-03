
var x = ['T', 'R', 'W', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'T']; 
let f=y=>{
    for (var i = 0; i < y.length; i++) {
        for (var v = 0; v < x.length; v++) {
            if(y.charAt(i)==x[v].toLowerCase()){
                y=y.split(y.charAt(i)).join(x[v]);
            }
        }
    }
    y=y.split(" ").join("");
    console.log(y);
};

console.log(f("Hello world!"));