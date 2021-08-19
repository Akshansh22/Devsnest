const fs=require('fs')

function addition(n1,n2){
    const filename='names.txt'
    const sum=n1+n2
    if(!fs.existsSync(filename)){
        fs.writeFileSync(filename,sum+'\n')
    }
    else{
        fs.appendFileSync(filename,sum+'\n')
    }
}

const names=['x','y','z']

addition(6,11);
addition(5,10);
addition(5,15);