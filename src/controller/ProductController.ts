import { Product } from "../model/Product";

import { ProductRepository } from "../repository/ProductRepository";

export class ProductController implements ProductRepository {

  private productList: Array<Product> = new Array<Product>();
  public id: number = 0;

  listAllProducts(): void {
    for (let product of this.productList) {
      product.visualizar();
    }
  }

  listProductbyID(id: number): void {
    let foundProduct = this.findInArray(id);

    if (foundProduct !== null) {
      foundProduct.visualizar();
    } else {
      console.log("\nProduct was not found!!");
    }
  }

  registerProduct(product: Product): void {
    this.productList.push(product);
    console.log("The product has been added!");
  }

  updateProduct(product: Product): void {
    let foundProduct = this.findInArray(product.id);

    if (foundProduct !== null) {
      this.productList[this.productList.indexOf(foundProduct)] = product;
      console.log(`The product number ${product.id} has been updated successfully!`);
    } else {
      console.log("\nProduct was not found!");
    }
  }

  deleteProduct(id: number): void {
    let foundProduct = this.findInArray(id);

    if (foundProduct !== null) {
      this.productList.splice(this.productList.indexOf(foundProduct), 1);
      console.log(`The product number ${id} fhas been successfully deleted!`);
    } else {
      console.log("\nProduct was not found!");
    }
  }

  public gerarId(): number {
    return ++this.id;
  }

  public findInArray(id: number): Product | null {
    for (let product of this.productList) {
      if (product.id === id) {
        return product;
      }
    }

    return null;
  }
}
