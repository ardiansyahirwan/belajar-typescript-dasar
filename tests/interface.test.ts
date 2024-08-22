import { Manager } from "../src/manager";
import { TotalPrice } from "../src/product-interface";

describe( 'Interface', () => {
   it( 'can declare', () => {
      const getTotalPrice: TotalPrice = ( quantity: number, price: number ): number => {
         return price * quantity;
      }
      expect( getTotalPrice( 2, 2000 ) ).toBe( 4000 );
   } );

   it( 'can extends employee', () => {
      const manager: Manager = {
         id: 1,
         name: "budi",
         address: "depok",
         division: "IT"
      }
      console.info( manager );
   } );

} );
