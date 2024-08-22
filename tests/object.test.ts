describe( 'Object Type', () => {
   it( 'should object', () => {
      const product: { id: string, name: string } = {
         id: "1",
         name: "Samyang"
      }

      console.info( product );
   } );

} );
