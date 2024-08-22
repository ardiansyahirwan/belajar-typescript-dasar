import { Animal, AnimalType } from "../src/enum";

describe( 'enum data type', () => {
   it( 'should enum result', () => {
      const animal: Animal = {
         id: 1,
         name: "halley",
         type: AnimalType.CAT
      }
      console.info( animal );
   } );
} );
