const fx= (x)=>{
    if (typeof x=="string"){
        x=x.split(' ').join('').toLowerCase();
        let y=x.split('').reverse().join('');
        return y===x;
    }else return false;
}

console.log(fx("Luz azul"));