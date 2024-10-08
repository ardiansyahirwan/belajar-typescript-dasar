export type Category = {
   id: string;
   name: string;
}

export type Product = {
   id: string;
   name: string;
   category: Category;
   description?: string;
}