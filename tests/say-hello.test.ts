import { sayHello } from "../src/say-hello";

describe( 'test sayHello function', () => {
   it( 'should be Hello Irwan', () => {
      expect( sayHello( 'Irwan' ) ).toBe( 'Hello Irwan' );
   } );

} );
