<h2>Documentation</h2>

- [Installation](#installation)
  - [Dependancy Setup NodeJS](#dependancy-setup-nodejs)
  - [Dependancy Setup TypeScript](#dependancy-setup-typescript)
- [Typescript Compilation](#typescript-compilation)
  - [Important thing compile with Bable Typescript](#important-thing-compile-with-bable-typescript)
  - [Choose Compilation with Include and Exclude](#choose-compilation-with-include-and-exclude)
- [Variable Declaration](#variable-declaration)
  - [Primitive Data Type](#primitive-data-type)
  - [Array Data Type](#array-data-type)
    - [Readonly Array](#readonly-array)
    - [Tuple](#tuple)
  - [Any Data Type](#any-data-type)
  - [Union Data Type](#union-data-type)
  - [Alias Data Type](#alias-data-type)
    - [Aliases Type Union](#aliases-type-union)
  - [Object Data Type](#object-data-type)
  - [Enum Data Type](#enum-data-type)
  - [Assertion Data Types](#assertion-data-types)
- [Optional Properties](#optional-properties)
  - [Null and undefined](#null-and-undefined)
- [Decision Making](#decision-making)
  - [If Statement](#if-statement)
  - [Ternary Operator](#ternary-operator)
  - [Switch statement](#switch-statement)
- [Looping](#looping)
  - [For Loop](#for-loop)
  - [While Loop](#while-loop)
  - [Do While Loop](#do-while-loop)
  - [Break and Continue](#break-and-continue)
- [Interface](#interface)
  - [Readonly Interface properties](#readonly-interface-properties)
  - [Function Interface](#function-interface)
  - [Indexable Interface](#indexable-interface)
  - [Dictionary Interface](#dictionary-interface)
  - [Extending Interface](#extending-interface)
  - [Function in interface](#function-in-interface)
  - [Intersection Types](#intersection-types)
- [Function](#function)
  - [Define a Function](#define-a-function)
  - [Function Parameter](#function-parameter)
  - [function Overload](#function-overload)
  - [Function as Parameter](#function-as-parameter)
  - [Anonymous Function as Parameter](#anonymous-function-as-parameter)
  - [Arrow Function as Parameter](#arrow-function-as-parameter)
- [Tests](#tests)
  - [Function Test](#function-test)
  - [Declare Variable test](#declare-variable-test)
  - [Alias Test](#alias-test)
  - [Enum DataType](#enum-datatype)
  - [Function Interface Test](#function-interface-test)
  - [Function Overloading test](#function-overloading-test)

<br/>
<br/>

# Installation
Firstly use ``npm init`` for initialy package, and then on your ``package.json`` add this code
```json
"type":"module"
```

## Dependancy Setup NodeJS
add dependancy for unit test in typescript package with command
```bash
npm install --save-dev jest @types/jest
```
then, you can add babel too, you can setup babel on **[babeljs.io](https://babeljs.io/setup#installation)**
```bash
npm install --save-dev babel-jest @babel/preset-env
```
on setup babel, make a new file for babel configuration ``babel.config.json``

## Dependancy Setup TypeScript
Install Dependancy for TS with command:
```bash
npm install --save-dev typescript
```
make a file configuration for TS when all configuration on it, at ``tsconfig.json`` with command
```bash
npx tsc --init
```
and change ``"module"`` from ``"commonjs"`` to ``"ES6"``. And for [Jest](https://jestjs.io/docs/getting-started#using-typescript) setup for Typescript you can visit documentation for **[Jest](https://jestjs.io/docs/getting-started#using-typescript)**. on documentation, choose via ``babel`` and via ``ts-jest``. And you can install too for auto-complete TS avail, on command
```bash
npm install --save-dev @types/jest
```
<br/>
<br/>

# Typescript Compilation
actually typescript will compile into javascript with command:
```bash
npx tsc
```
and programmers usually divide for compile typescript into folder ``dist`` (distributor). it doing for dist folder cannot include into git commit. we can change folder for save file compilation in ``tsconfig.json``. you can change on ``"outDir"``.
```json
"outDir": "dist/",
```
## Important thing compile with Bable Typescript
sometimes bable typescript ignore javascipt code in TS file, in a time we should check with ``npx tsc`` for checking compile have error or not. but it wasted time to do. for checking in a time after time you can use 
```bash
npx tsc --watch
```
and for end this command you can use ``CTRL + C``
## Choose Compilation with Include and Exclude
if you want to choose one folder for Include to Compile or you dont want to compile you can add this to ``tsconfig.json``
```json
"include":["src/**/*"],
"exclude":["tests/**/*"]
```

<br/>
<br/>

# Variable Declaration
TS it a Strongly Type variable, it means that you should declare variable type like string or etc. If variable was declare, it cant change except you change in first declaration variable. TS support for Primitive Data type.
```typescript
const name:string = 'Angga';
const price:number = 20000;
const isCheap:boolean = false;

console.info(name);
console.info(price);
console.info(isCheap);
```
## Primitive Data Type
example :
```typescript
const name = 'Angga';
const price = 20000;
const isCheap = false;

console.info(name);
console.info(price);
console.info(isCheap);
```
<br/>
<br/>

## Array Data Type
array in JS and TS probably almost same, in TS you should declare type data of array, example:
```typescript
const summary:number[] = [10,20,30];
console.info(summary);
```
### Readonly Array
you can make array in TS with ReadOnlyArray, it means data on array in TS cannot Change
```typescript
const summary:ReadonlyArray<number> = [9,9,9];
console.info(summary);
```
### Tuple
Tuple is array when data is readonly and was set.
```typescript
const summary: readonly [ number, number, number ] = [ 9, 9, 9 ];
console.info(summary);
```
<br/>
<br/>

## Any Data Type
``any data type`` using for declare data with anything data type, TS not recommeded this. because if you want to do this, you better use javascript. but if is urgent, you can declare with ``any data type``
```typescript
const person:any = {
   name:"Angga",
   age:17
};
console.info(person.age);
```
Usually Any data type using for declare variable from library, when it was safe and cant change. and any was use for attribute when value is not pasti.
<br/>
<br/>

## Union Data Type
Union is used for declare variable with can change, but type data was set when declare.
```typescript
let price:string|number=2000;
price="dua ribu";
console.info(price);
```
if you want to use ``union data type`` better you have to making decision for checking using ``typeof()``.
```typescript
let price:string|number=2000;
price="dua ribu";

if ( typeof(price) === "string" ){
   return price.toUpperCase();
} else {
   return price * 2;
}
```
<br/>
<br/>

## Alias Data Type
Alias data type use for declare object variable when we know how structure data is. usually Alias use ``type`` for declare variable.
```typescript
export type Category = {
   id : string;
   name: string;
}
export type Product = {
   id: string;
   name: string;
   category: Category;
}
```
### Aliases Type Union
```typescript
export type Id = string|number;

export type Category = {
   id : Id;
   name: string;
}
export type Product = {
   id: Id;
   name: string;
   category: Category;
}
```
<br/>
<br/>

## Object Data Type
object type use for compile with result object in javascript in a simple developemnt. if record have a more variable, it good for use [Alias](#alias-data-type).
```typescript
const product:{id:string, name:string} = {
   id:"1",
   name:"Samyang"
}
```
## Enum Data Type
enum datatype is a data type when value attribute on data type was known. user just choose value on enum. enum usually declare with keyword ``enum``
```typescript
export enum AnimalType {
   DOG,
   RABBIT,
   CAT,
}

export type Animal = {
   id:number;
   name:string;
   type:AnimalType;
}
```
## Assertion Data Types
sometimes we dont know, what is return value from some function. And we just write ``any`` to return value from function. in this case we can use Assertion data type to coverting data type as we need use keyword ``as``. **We have to make sure for attribute that coverting into data type we want. is a interface have an this attribute or no ?**
```typescript
type Animal = {
   id:number;
   name: string;
}

const dog:any={
   id:2,
   name:"doggy"
}
// we want to change data type of dog to type Animal

const dogNew:Animal = dog as Animal;
```
<br/>
<br/>

# Optional Properties
optional properties is a properties is not should include. it can be optional
example from [Alias](#alias-data-type). this code will update with using optional attribute.
```typescript
 export type Category = {
   id : string;
   name: string;
}
export type Product = {
   id: string;
   name: string;
   category: Category;
   description?:string;
}
```
<br/>
<br/>

## Null and undefined
```typescript
const name:string | null = "budi";
if (name === "budi"){
   return console.info("ini string")
} else {
   return console.info("ini null")
}
```

<br/>
<br/>

# Decision Making
it how you to making decision with ``if else, switch case``
## If Statement
same with javascript

## Ternary Operator
same with javascript
```typescript
let value = 90;
const desc = value < 70 ? "tidak lulus" : "lulus";
```

## Switch statement
same with javascript
<br/>
<br/>

# Looping
## For Loop
TS support for all ``for`` loop, like ``forIn`` ``forOf``
```typescript
const students = ["Mimi", "Momo", "Meme"];

for(let i = 0; i < students.length();i++){
   console.log(students[i]);
}

// for in
for(const index in students){
   console.log(students[index]);
}

// for of
for(const student of students){
   console.log(student);
}
```
## While Loop
Same with javascript, while statement true , block code will run 

## Do While Loop
same with javascript

## Break and Continue
same with javascript, it doing when we use looping. break use for breaked loop. and continue use for continue looping
<br/>
<br/>

# Interface
for complex atribut, dibanding using type [alias](#alias-data-type) more programmer using ``interface`` for declare attribut:
```typescript
export interface Product {
   id:number;
   name:string;
   description?:string;
}
```
## Readonly Interface properties
```typescript
export interface Product {
   id:number;
   name:string;
   readonly price:number;
   description?:string;
}
```
## Function Interface
```typescript
export interface TotalPrice {
   ( quantity: number, price: number ): number;
}

const getTotalPrice: TotalPrice = ( quantity: number, price: number ): number => {
    return price * quantity;
}
```
## Indexable Interface
in interface we can declare array with indexes.
```typescript
interface StringArray {
   [index:number]:string
}

const name:StringArray = ["get","put","delete"];
console.info(name);
```
## Dictionary Interface
```typescript
interface StringDictionary {
   [key:string]:string
}

const names:StringDictionary = {
   name: "budi",
   fullname:"sasono"
};
console.info(names["name"]);
```
## Extending Interface
Interface can inherit extending interface, and can use attribute interface were extended
```typescript
export interface Employee {
   id: number;
   name: string;
   address: string;
}

export interface Manager extends Employee {
   division: string;
}

 const manager: Manager = {
         id: 1,
         name: "budi",
         address: "depok",
         division: "IT"
      }
```
## Function in interface
you can define function in interface,
```typescript
interface Person {
   name:string;
   sayHello:(name:string):string;
}

const person:Person = {
   name:"Irwan",
   sayHello:(name:string):string => {
      return "Hello ${name}, My name is ${this.name}";
   }
}

console.info(person.sayHello("Black"))
```
## Intersection Types
is a how to make new data types by merge two interface. for make Intersection Types we can use ``&``. If you have extends interface, and not adding attribute. there is good to use Intersection types than extends to interfaces
```typescript
interface Employee {
   id: number;
   name: string;
   address: string;
}

interface Manager extends Employee {
   division: string;
}
// dibanding harus extends employee dan manager
type Spv = Employee & Manager ;
const spv:Spv = {
   id:2,
   name:"Angga",
   address:"cibinong",
   division: "IT"
}
```

<br/>
<br/>

# Function
before you create a file in TS, on your directory make a folder with ``src``
## Define a Function
on your file ``say-hello.ts`` type this code. to return string use backtick
```typescript
export function sayHello(name: String):String{
   return `Hello ${name}`;
}
```
## Function Parameter
Function parameter in TS same with JS. Typescript support for Function parameter, Rest Parameter (with Argument), default option. different part from TS is Parameter in TS function are required, except you declare optional properties use keyword ``?``.
```typescript
export function sayHello(name: string, age?:number):string{
   return age?`Hello ${name},I am ${age} years old`:`Hello ${name}`;
}
```
## function Overload
Is a function can accepts different kinds Arguments. lest check [Function Overloading test](#function-overloading-test).
## Function as Parameter
function can be as parameter like in javascript.
```typescript
function sayHello(name:string, greet:(name:string)=>string):string {
   return `Hello ${greet(name)}`;
}
function toUpper(name:string):string{
   return name.toUpperCase();
}
console.info(sayHello('eko',toUpper()));
```
## Anonymous Function as Parameter
```typescript
function sayHello(name:string, greet:(name:string)=>string):string {
   return `Hello ${greet(name)}`;
}
console.info(sayHello('eko', function(name:string):string {
   return name.toUpperCase();
}));
```

## Arrow Function as Parameter
```typescript
function sayHello(name:string, greet:(name:string)=>string):string {
   return `Hello ${greet(name)}`;
}
console.info(sayHello('eko', (name:string):string => name.toUpperCase() ));
```
<br/>
<br/>

# Tests
For checking TS installation you can type this code for test, make sure you have ``tests`` folder.
```javascript
describe( 'example', () => {
   it( 'should say hi', () => {
      const name = 'Hi name';
      expect( name ).toBe( 'Hi name' );
   } );

} );

```
## Function Test
this test for [Define a Function](#define-a-function) section:
```javascript
describe( 'test for sayHello function', () => {
   it( 'should Hello Irwan', () => {
      expect( sayHello('Irwan') ).toBe( 'Hello Irwan' );
   } );

} );
```
## Declare Variable test
this test for [Variable Declaration](#variable-declaration) section:
```javascript
describe( 'test Declare variable on TS', () => {
   it( 'should declare', () => {
      const name:string = 'Angga';
      const price:number = 20000;
      const isCheap:boolean = false;

      console.info(name);
      console.info(price);
      console.info(isCheap);
   } );

} );
```
## Alias Test
this test for [Alias Data Type](#alias-data-type) section.
```typescript
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

``` 
## Enum DataType
this test for [Enum](#enum-data-type)
```typescript
import { Animal, AnimalType } from "../src/enum";

describe( 'enum data type', () => {
   it( 'should enum result', () => {
      const animal: Animal = {
         id: 1,
         name: "halley",
         type: AnimalType.DOG
      }
   } );
} );
```
## Function Interface Test
this test for [Function Interface](#function-interface)
```typescript
import { TotalPrice } from "../src/product-interface";

describe( 'Interface', () => {
   it( 'can declare', () => {
      const getTotalPrice: TotalPrice = ( quantity: number, price: number ): number => {
         return price * quantity;
      }

      expect( getTotalPrice( 2, 2000 ) ).toBe( 4000 );
   } );

} );

```
## Function Overloading test
this test for [Function overloading](#function-overload)
```typescript
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

```