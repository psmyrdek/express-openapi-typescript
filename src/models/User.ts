import {ApiProperty} from "openapi-metadata/decorators";

export class User {
  @ApiProperty({type: Number})
  declare id: number;

  @ApiProperty({type: String})
  declare username: string;

  @ApiProperty({type: String})
  declare email: string;

  @ApiProperty({type: "string", format: "date-time"})
  declare createdAt: Date;

  @ApiProperty({type: Boolean})
  declare isActive: boolean;
}
