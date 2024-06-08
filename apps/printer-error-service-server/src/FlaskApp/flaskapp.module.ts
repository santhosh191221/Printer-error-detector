import { Module } from "@nestjs/common";
import { FlaskAppService } from "./flaskapp.service";
import { FlaskAppController } from "./flaskapp.controller";
import { FlaskAppResolver } from "./flaskapp.resolver";

@Module({
  controllers: [FlaskAppController],
  providers: [FlaskAppService, FlaskAppResolver],
  exports: [FlaskAppService],
})
export class FlaskAppModule {}
