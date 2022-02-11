import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
    private configService: ConfigService,
  ) {}

  @Get()
  getAll() {
    return {
      apiKey: this.configService.get('API_KEY'),
      products: this.productsService.find(),
    };
  }

  @Get(':productId')
  getById(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findById(productId);
  }

  @Post()
  create(@Body() product: CreateProductDto) {
    return product;
  }
}
