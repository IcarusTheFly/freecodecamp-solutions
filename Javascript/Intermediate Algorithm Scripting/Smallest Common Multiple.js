function smallestCommons( arr ) {
  let highest = arr[ 0 ] > arr[ 1 ] ? arr[ 0 ] : arr[ 1 ],
    lowest = arr[ 0 ] < arr[ 1 ] ? arr[ 0 ] : arr[ 1 ],
    result = highest,
    resultFound = false;

  while ( !resultFound ) {
    resultFound = true;
    for ( let i = lowest; i <= highest; i++ ) {
      if ( result % i !== 0 ) {
        resultFound = false;
        break;
      }
    }
    if ( !resultFound ) {
      result++;
    }
  }
  return result;
}

smallestCommons( [ 1, 5 ] );
