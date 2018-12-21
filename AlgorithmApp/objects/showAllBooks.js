function showAllBooks() {

    var library = [ 
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title:  'Mockingjay: The Final Book of The Hunger Games', 
            readingStatus: false
        }
    ];

    for(var i = 0; i < library.length; i++) {
        console.log("Author: " + library[i].author);
        console.log("Title: " + library[i].title);
        console.log("Status: " + library[i].readingStatus);
        console.log("\n");
    }
}
console.log(showAllBooks());