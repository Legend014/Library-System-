//A library system to aid in book and rent related activities
let books={
    'blinding lights by Max Halloway':5.00, 'Midnight by Ali Mustapha':8.50,
    'One last Dance by William Shakespare':7.25, 'Born to be Great by Cypril Ihoha':2.00,
    'Night of a Thousand Stars by Charles Beckham':5.00,'Crimson Moon by Henry MIller':6.75,
    'Malevolent Shrine by Tom Van de Hook':5.25,'The Secret to Success by Moses Mbah':7.20,
    'The Tales of Harry Potter by The Unknown One':9.00,'Dexter: The Origin by Luckas Winter':8.75

}
let Rented_Books= []
function detailsoftransaction(renter,name,books,dateofreturn) {
    console.log('Please input details of transaction while we process your request')
    console.log('Name of renter:' + renter)
    console.log('Name of Rentee:' + name)
    console.log('The book requested:')
    console.log(books in books)
    if (books in books) {
        console.log('Book is available for rent')
        moveTo.Rented_Books
        console.log('Return Date:'+ dateofreturn)
    } else { 
        console.log('Sorry....Book requested is not available in the library at the moment')
    }
}
const receipt = () => console.log (name)
console.log(renter)
console.log(books)
c-onsole.log(dateofreturn)