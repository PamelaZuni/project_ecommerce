import { Product } from "./Product";

export class Jewelry extends Product {
  private _material: string;

  constructor(
    id: number,
    name: string,
    type: number,
    price: number,
    material: string,
  ) {
    super(id, name, type, price);
    this._material = material;
  }

	public get material(): string {
		return this._material;
	}

	public set material(value: string) {
		this._material = value;
	}

  public visualizar(): void {
    super.visualizar();
    console.log(`Material: ${this._material}`);
  }
}