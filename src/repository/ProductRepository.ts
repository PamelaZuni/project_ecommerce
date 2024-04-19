import { Product } from "../model/Product";

export interface ProductRepository {
  listAllProducts(): void; 
  listProductbyID (id: number): void;
  registerProduct (product: Product): void;
  updateProduct(product: Product): void;
  deleteProduct(id: number): void;
}
