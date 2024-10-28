import { IsNotEmpty } from "class-validator";

export class CreatePromptDto{
    @IsNotEmpty()
    text: string;
}