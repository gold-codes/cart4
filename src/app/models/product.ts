export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(id, name, description = '', price = 0, imageUrl = 'https://djsoulchildac.com/wp-content/uploads/2020/08/Royal-Blue-Casual-Check-Shirt-1-min.jpg') {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.imageUrl = imageUrl
  }
}
