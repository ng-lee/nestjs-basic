import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeormModule } from '../common/typeorm.module';
import { AuthRepository } from './auth.repository';

@Module({
  imports: [TypeormModule.forCustomRepository([AuthRepository])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
