function sumFibs(num) {
  var fibs = [ 1, 1 ];

  while ( num > fibs[ fibs.length - 1 ] ) {
    fibs.push( fibs[ fibs.length - 1 ] + fibs[ fibs.length - 2 ] );
  }

  return fibs.reduce( ( a, b ) => {
    return ( b % 2 !== 0 && b <= num ) ? a + b : a;
  }, 0 );
}

sumFibs(4);
