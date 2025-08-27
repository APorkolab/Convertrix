export class Item {
  id: number = 0;
  name: string = '';
  length: number = 0;
  weight: number = 0;
  description: string = '';

  constructor(
    id: number,
    name: string,
    length: number,
    weight: number,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.length = length;
    this.weight = weight;
    this.description = description;
  }
}
