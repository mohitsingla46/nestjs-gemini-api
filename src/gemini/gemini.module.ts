import { Module } from '@nestjs/common';
import { GeminiController } from './gemini.controller';
import { GeminiService } from './gemini.service';
import { ResponseService } from '../common/services/response.service';

@Module({
  controllers: [GeminiController],
  providers: [GeminiService, ResponseService]
})
export class GeminiModule {}
