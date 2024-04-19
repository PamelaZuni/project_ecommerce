import { Product } from "./Product";

export class Bag extends Product {
  private _typeLeather: string;

  constructor(
    id: number,
    name: string,
    type: number,
    price: number,
    leather: string,
  ) {
    super(id, name, type, price);
    this._typeLeather = leather;
  }

	public get typeLeather(): string {
		return this._typeLeather;
	}

	public set typeLeather(value: string) {
		this._typeLeather = value;
	}

  public visualizar(): void {
    super.visualizar();
    console.log(`Leather: ${this._typeLeather}`);
  }
	
}