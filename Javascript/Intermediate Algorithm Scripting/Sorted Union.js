function uniteUnique( ...arr ) {
  var result = [];
  for ( var i = 0; i < arr.length; i++ ) {
    for ( var j = 0; j < arr[ i ].length; j++ ) {
      if ( !~result.indexOf( arr[ i ][ j ] ) ) {
        result.push( arr[ i ][ j ] );
      }
    }
  }
  return result;
}

uniteUnique( [ 1, 3, 2 ], [ 5, 2, 1, 4 ], [ 2, 1 ] );
