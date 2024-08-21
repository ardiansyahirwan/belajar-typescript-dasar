describe( 'array declaration', () => {
   it( 'should be array number', () => {
      const summary: number[] = [ 10, 9, 8 ];
   } );

   it( 'should Read only array', () => {
      const summary: ReadonlyArray<number> = [ 9, 9, 9 ];
   } );

   it( 'should tuple declare', () => {
      const summary: readonly [ number, number, number ] = [ 9, 9, 9 ];
   } );

} );
