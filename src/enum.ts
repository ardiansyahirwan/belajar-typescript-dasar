export enum AnimalType {
   DOG = 'Dog',
   RABBIT = 'Rabbit',
   CAT = 'Cat'
}

export type Animal = {
   id: number;
   name: string;
   type: AnimalType;
}