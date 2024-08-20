<h2>Documentation</h2>

- [Installation](#installation)
  - [Dependancy Setup NodeJS](#dependancy-setup-nodejs)
  - [Dependancy Setup TypeScript](#dependancy-setup-typescript)
- [Typescript Compilation](#typescript-compilation)
- [Function](#function)
  - [Define a Function](#define-a-function)
- [Tests](#tests)
  - [Function Test](#function-test)

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