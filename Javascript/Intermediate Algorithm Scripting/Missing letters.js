function fearNotLetter(str) {
  var letters = 'abcdefghijklmnopqrstuvwxyz',
    first = str[ 0 ],
    missingLetter;

  for ( var i = 1; i < str.length; i++ ) {
    if ( letters.indexOf( str[ i ] ) !== letters.indexOf( first ) + 1 ) {
      missingLetter = letters[ letters.indexOf( first ) + 1 ];
    }
    first = str[ i ];
  }

  return missingLetter;
}

fearNotLetter("abce");
