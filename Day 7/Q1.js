function key(obj){
    if ((typeof obj)!= "object"){
        return []
    }
    else{
        var keys=[]
        for (k in obj){
            keys.push(k);
        }
        return keys;
    }
}   

var color={red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}

console.log(key(color));
//console.log(typeof color)
//console.log(key("Testing"));