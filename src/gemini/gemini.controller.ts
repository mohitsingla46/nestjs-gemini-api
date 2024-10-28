import { Body, Controller, Post } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { CreatePromptDto } from './dto/prompt.dto';

@Controller('gemini')
export class GeminiController {
    constructor(
        private readonly geminiService: GeminiService
    ) { }
    @Post('generate')
    generate(@Body() createPromptDto: CreatePromptDto): Promise<any> {
        return this.geminiService.generateResponse(createPromptDto);
    }
}
