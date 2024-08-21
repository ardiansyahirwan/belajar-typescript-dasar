import { Category, Product } from "../src/alias";

describe( 'Alias data type', () => {
   it( 'should alias', () => {
      const category: Category = {
         id: "1",
         name: "Food"
      }

      const product: Product = {
         id: "2",
         name: "Indomie",
         category: category
      }
   } );

} );
