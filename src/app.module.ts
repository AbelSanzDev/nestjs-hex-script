import { Module } from "@nestjs/common";
import { HexExampleModule } from "./hex-example/hex-example.module";

@Module({
  imports: [HexExampleModule],
})
export class AppModule {}
