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

function showCollection(array){
  
}




