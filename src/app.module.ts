import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { environments } from './environments';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || 'env/.dev.env',
      isGlobal: true,
    }),
    UsersModule,
    ProductsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
