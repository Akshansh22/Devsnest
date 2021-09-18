var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
 { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
 { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

 for (var i in library){
    
     if (library[i].readingStatus==true){
         console.log("You have already read "+ library[i].title + " by "+ library[i].author );
     }
     else{
        console.log("You need to read "+ library[i].title + " by "+ library[i].author );
     }
 }