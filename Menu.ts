import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ProductController } from "./src/controller/ProductController";
import { Jewelry } from "./src/model/Jewelry";
import { Bag } from "./src/model/Bag";

let resume = true;

let option, id, type, price: number;
let name, material, typeLeather : string;
let  productType = ["Jewelry", "Bag"];

const productController: ProductController = new ProductController();

productController.registerProduct(
  new Jewelry(productController.gerarId(), "Zendaya", 1, 1200, "Platinum"),
);

productController.registerProduct(
  new Bag(productController.gerarId(), "Lowe", 2, 599, "Vegan"),
);

while (resume) {
  console.log(colors.bg.gray, colors.fg.magenta,
              "*****************************************************");
  console.log("                Harper & Steve                       ");
  console.log("         Where Style Meets Quality!                  ");
  console.log("                                                     ");
  console.log("*****************************************************");
  console.log("                                                     ");
  console.log("            1 - List all products                    ");
  console.log("            2 - List Product by ID                   ");
  console.log("            3 - Register Product                     ");
  console.log("            4 - Update Product                       ");
  console.log("            5 - Delete Product                       ");
  console.log("            0 - Exit                                 ");
  console.log("                                                     ");
  console.log("*****************************************************");
  console.log("                                                     ",
  colors.reset);

  console.log("Enter the desired option: ");
  option = readlinesync.questionInt("");

  switch (option) {
    case 0:
        console.log(colors.fg.gray,"\n Harper & Steve - Where Style Meets Quality!",
        colors.reset
        );
        resume = false;
      break;

    case 1:
        console.log(
          colors.fg.whitestrong,
          "\n\nList all products\n\n",
          colors.reset
        );
        productController.listAllProducts();
        keyPress();

      break;

    case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nList Product by ID\n\n",
          colors.reset
        );
        id = readlinesync.questionInt("Enter the Product ID: ");
        productController.listProductbyID(id);
        keyPress();
   
      break;

    case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nRegister Product\n\n",
          colors.reset
        );
        name = readlinesync.question("Enter the name of the Product: ");
        type = readlinesync.keyInSelect(productType, "", { cancel: false }) + 1;
        price = readlinesync.questionFloat("Enter the price: ");

        switch (type) {
            case 1:
                let material = readlinesync.question("Enter the material of the Jewelry: ");
                productController.registerProduct(
                  new Jewelry(
                    productController.gerarId(),name, type, price, material,
                  ),
                )
          
              break;

            case 2:
                let leatherType = readlinesync.question("Enter the leather type of the Bag: ");
                productController.registerProduct(
                  new Bag(productController.gerarId(), name, type, price, leatherType),
                );
              
              break;
        }
        keyPress();

      break;

    case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nUpdate Product\n\n",
          colors.reset
        );
        id = readlinesync.questionInt("Enter the Product ID: ");

        let product = productController.findInArray(id);

            if (product !== null) {
              name = readlinesync.question("Digit the Product Name: ");
              type = product.type;
              price = readlinesync.questionFloat("Digit the price: ");

              switch (type) {
                case 1:
                  let material = readlinesync.question(
                    "Digit the Jewelry material: ",
                  );
                  productController.updateProduct(
                    new Jewelry(id, name, type, price, material),
                  );
                  break;
                case 2:
                  let leatherType = readlinesync.question("Digit the leather of the Bag: ");
                  productController.updateProduct(
                    new Bag(id, name, type, price, leatherType),
                  );
                  break;
              }
            } else console.log("Product was not found!");

            keyPress();
            break;

    case 5:
        console.log(colors.fg.whitestrong,"\n\nDelete Product\n\n", colors.reset);
        id = readlinesync.questionInt("Enter the Product ID: ");
        productController.deleteProduct(id);
      
      keyPress();
      break;

    default:
        console.log(
          colors.fg.whitestrong,
          "Choose a valid option",
          colors.reset
        );
   
      break;
  }
}

function sobre(): void {
console.log("\n*****************************************************");
console.log("Project Developed by: Pamela Rodrigues");
console.log("Generation Brasil");
console.log("github.com/pamelazunii");
console.log("*****************************************************");
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPress enter to continue...");
  readlinesync.prompt();
}



