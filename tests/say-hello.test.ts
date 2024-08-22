import { sayHello } from "../src/say-hello";

describe( 'test sayHello function', () => {
   it( 'should function', () => {
      expect( sayHello( 'Irwan' ) ).toBe( 'Hello Irwan' );
   } );

   it( 'should optional parameter', () => {
      function sayName( name: string, age?: string ): string {
         return age ? `Hello ${ name }, I am ${ age } years old` : `Hello ${ name }`;
      }
      expect( sayName( "budi" ) ).toBe( "Hello budi" );
      expect( sayName( "budi", "21" ) ).toBe( "Hello budi, I am 21 years old" );
   } );

   it( 'should default parameter', () => {
      function sayName( name: string = "Default" ): string {
         return `Hello ${ name }`;
      }
      expect( sayName() ).toBe( 'Hello Default' );
      expect( sayName( "toni" ) ).toBe( 'Hello toni' );
   } );

   it( 'should overloading functions', () => {
      function getNumber( numberTelp: string ): string;
      function getNumber( numberTelp: number ): number;
      function getNumber( numberTelp: any ) {
         if ( typeof numberTelp === "string" ) {
            return numberTelp.toUpperCase();
         }
         else if ( typeof numberTelp === "number" ) {
            return numberTelp.toString();
         }
         else {
            return numberTelp;
         }

         expect( getNumber( 10 ) ).toBe( "10" );
         expect( getNumber( "di" ) ).toBe( "DI" );
      }
   } );



} );
