import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";


let resume = true;

let option, id, type, price: number;
let name, material, typeLeather : string;
let  productType = ["Jewelry", "Bag"];

while (resume) {
  console.log("*****************************************************");
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

      break;

    case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nList Product by ID\n\n",
          colors.reset
        );
        id = readlinesync.questionInt("Enter the Product ID: ");
   
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
          
              break;

            case 2:
                let leatherType = readlinesync.question("Enter the leather type of the Bag: ");
              
              break;
        }

      break;

    case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nUpdate Product\n\n",
          colors.reset
        );
        id = readlinesync.questionInt("Enter the Product ID: ");

      break;

    case 5:
        console.log(colors.fg.whitestrong,"\n\nDelete Product\n\n", colors.reset);
        id = readlinesync.questionInt("Enter the Product ID: ");
      
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


