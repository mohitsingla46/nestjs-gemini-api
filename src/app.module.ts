import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GeminiModule } from './gemini/gemini.module';

@Module({
  imports: [ConfigModule.forRoot(), GeminiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
