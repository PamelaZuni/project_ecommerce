export abstract class Product {
  private _id: number;
  private _name: string;
  private _type: number;
  private _price: number;

	constructor(id: number, name: string, type: number, price: number) {
		this._id = id;
		this._name = name;
		this._type = type;
		this._price = price;
	}

	public get id(): number {
		return this._id;
	}

	public get name(): string {
		return this._name;
	}

	public get type(): number {
		return this._type;
	}

	public get price(): number {
		return this._price;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set name(value: string) {
		this._name = value;
	}

	public set type(value: number) {
		this._type = value;
	}

	public set price(value: number) {
		this._price = value;
	}

  public visualizar(): void {
    let typeName: string = "";

    switch (this._type) {
      case 1:
        typeName = "Jewelry";
        break;
      case 2:
        typeName = "Bag";
        break;
    }

    console.log("****************************************************");
    console.log("Product");
    console.log("****************************************************");
    console.log(`Product ID: ${this._id}`);
    console.log(`Product Name: ${this._name}`);
    console.log(`Product Type: ${typeName}`);
    console.log(`Product Price: ${this._price}`);
  }
}