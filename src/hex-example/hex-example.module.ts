import { Module } from '@nestjs/common';
import { HexExampleService } from './application/hex-example/hex-example.service';
import { HexExampleController } from './presentation/hex-example/hex-example.controller';

@Module({
  providers: [HexExampleService],
  controllers: [HexExampleController]
})
export class HexExampleModule {}
