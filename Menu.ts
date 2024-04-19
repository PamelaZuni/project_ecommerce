import readlinesync = require("readline-sync");

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
        console.log("\n Harper & Steve - Where Style Meets Quality!",);
        resume = false;
      break;

    case 1:
        console.log("\n\nList all products\n\n");

      break;

    case 2:
        console.log(
          "\n\nList Product by ID\n\n");
        id = readlinesync.questionInt("Enter the Product ID: ");
   
      break;

    case 3:
        console.log(
          "\n\nRegister Product\n\n");
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
        console.log("\n\nUpdate Product\n\n",);
        id = readlinesync.questionInt("Enter the Product ID: ");

      break;

    case 5:
        console.log("\n\nDelete Product\n\n");
        id = readlinesync.questionInt("Enter the Product ID: ");
      
      break;

    default:
        console.log("Choose a valid option");
   
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


