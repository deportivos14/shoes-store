export interface Product {
  id: string;
  name: string;
  price: number;
  discount_price: number;
  image: string;
  available_color: [Color];
  stock: number;
  description: string;
  size: string;
  sex: string;
  published: boolean;
}

export interface Color {
  id: number,
  item_id: number,
  item_text: string
}