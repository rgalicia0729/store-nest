import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  counter = 1;

  listProducts: Product[] = [
    {
      id: 1,
      name: 'Mouse',
      description: 'Mx master 3',
      price: 150.0,
      image: 'https://image.mouse.mxmaster',
    },
  ];

  find(): Product[] {
    return this.listProducts;
  }

  findById(id: number): Product {
    const product = this.listProducts.find(
      (product: Product) => product.id === id,
    );

    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }

    return product;
  }
}
