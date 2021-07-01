function array_Clone(ex){
    console.log(ex.slice(0));
}
var sample = [1,2,3,4];
array_Clone(sample);
array_Clone([1, 2, [4, 0]]);