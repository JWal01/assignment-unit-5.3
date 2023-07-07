console.log('***** Music Collection *****')
//- Create a variable `collection` that starts as an empty array.

//- Add a function named `addToCollection`. This function should:
  //- Take in the album's `title`, `artist`, `yearPublished` as input parameters
  //- Create a new object having the above properties
 // - Add the new object to the end of the `collection` array
  //- Return the newly created object

  let collection = [];

  function addToCollection(titleIn, artistIn, yearPublishedIn ){
    let collectionInfo = {
      title: titleIn,
      artist: artistIn,
      yearPublished: yearPublishedIn,
    };
    collection.push(collectionInfo);
    return collectionInfo;
  }

  //- Test the `addToCollection` function:
  - //Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  //- Console.log each album as added using the returned value.
  //- After all are added, console.log the `collection` array.

  addToCollection('Wonder Whats Next' , 'Chevelle', 2002 );

  addToCollection('Hats Off to the Bull' , 'Chevelle', 2011);

  addToCollection('The North Corridor', 'Chevelle', 2016);

  addToCollection('The Resistance', 'Muse', 2009);

  addToCollection('Will of the People', 'Muse', 2022);

  addToCollection('Toxicity' , 'System of a Down' , 2001);
  console.table(collection);
  console.log(collection);

  //- Add a function named `showCollection`. This function should:
  //- Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
  //- Console.log the number of items in the array.
  //- Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

//- Test the `showCollection` function.

function showCollection(arrayIn){
  console.log(arrayIn.length);
  for (let i = 0; i < arrayIn.length; i++) {
    console.log(arrayIn[i]);
    
  }

}
showCollection(collection)



//- Add a function named `findByArtist`. This function should:
  //- Take in `artist` (a string) parameter
  //- Create an array to hold any results, empty to start
  //- Loop through the `collection` and add any objects with a matching artist to the array.
  //- Return the array with the matching results. If no results are found, return an empty array.

  //- Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
  
 
 

 function findByArtist(artistIn,) {
  let results = [];
  for (let i=0; i < collection.length; i++) {
    if (artistIn === collection[i].artist) {
      results.push(collection[i]);
    } 
  } console.log(results);
 }

findByArtist('Metallica');
findByArtist('Chevelle');
findByArtist('Muse');

//- Create a function called `search`. This function should:
  //- Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
  //```
  //{ artist: 'Ray Charles', year: 1957 }
 // ```
  //- The returned output from `search` should meet these requirements:
    //- Return a new array of all items in the `collection` matching *all* of the search criteria.
    //- If no results are found, return an empty array.
   // - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

   function search( artist, year){
    let searchResults = [];
    for (let i = 0; i < collection.length; i++) {
      if (artist === collection[i].artist && year === collection[i].year) {
        searchResults.push(collection[i])
      }
    }
   }
   search('Muse', 2022);

   function search(toSearch){
    for (let i = 0; i < collection.length; i++) {
      if(collection[i].artist === toSearch || collection[i].year === toSearch){
        result.push(collection[i]);
      }else if(collection[i].artist != toSearch && collection[i] != toSearch){
        result = []
      }else{
      return collection
      }
    }
   }
   