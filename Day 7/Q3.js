const student = { name : "David Rayy", sclass : "VI", rollno : 12 };

var size=0,key;
for (key in student){
    if (student.hasOwnProperty(key)){
        size+=1;
    }
}
console.log(size);