'use strict';
//
// module.exports = function() {
//   return function(feed, property, filter) {
//     return feed.filter(post => {
//       return post[property] === filter;
//     });
//   };
// };

module.exports = function(){
  return function(filteredCollection, searchValue){
    let regex = fuzzySearch(searchValue);

    return filteredCollection.filter(value => {
      return regex.test(value.game.toUpperCase());
    });
  };
};

function fuzzySearch(input){
  if(!input) return /.*/;

  let searchValue = `.*${input.toUpperCase().split('').join('.*')}.*`;
  return new RegExp(searchValue);
}

// module.exports = function(){
//   return function(galleries, searchTerm){
//     if(!searchTerm) return /.*/;
//
//     let pattern = `.*${searchTerm.toUpperCase().split('').join('.*')}.*`;
//     let regExp = new RegExp(pattern);
//
//     return galleries.filter(gallery => regExp.test(gallery.game.toUpperCase()));
//   };
// };
