import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { CreatePromptDto } from './dto/prompt.dto';
import { ResponseService } from 'src/common/services/response.service';
import { ResponseDto } from 'src/common/dto/response.dto';

@Injectable()
export class GeminiService {
  constructor(
    private readonly responseService: ResponseService
) { }

  async generateResponse(createPromptDto: CreatePromptDto): Promise<ResponseDto<string>> {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(createPromptDto.text);
    const content = result.response.text();
    return this.responseService.success(content);
  }
}
