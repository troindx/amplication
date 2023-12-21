/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { PixelUpdateManyWithoutMoodsInput } from "./PixelUpdateManyWithoutMoodsInput";
import { Type } from "class-transformer";

@InputType()
class MoodUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => PixelUpdateManyWithoutMoodsInput,
  })
  @ValidateNested()
  @Type(() => PixelUpdateManyWithoutMoodsInput)
  @IsOptional()
  @Field(() => PixelUpdateManyWithoutMoodsInput, {
    nullable: true,
  })
  pixels?: PixelUpdateManyWithoutMoodsInput;
}

export { MoodUpdateInput as MoodUpdateInput };
