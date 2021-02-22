import { ApiProperty } from '@nestjs/swagger';

export default class User {
  private id: number;

  @ApiProperty({ example: 'sfbgs', description: 'The age of the Cat' })
  private firstname: string;

  @ApiProperty({ example: 'sfbgs', description: 'The age of the Cat' })
  private lastname: string;

  @ApiProperty({ example: 'sfbgs', description: 'The age of the Cat' })
  private mail: string;

  @ApiProperty({ example: 'fgss', description: 'The age of the Cat' })
  private password: string;

  public constructor(
    id?: number,
    firstname?: string,
    lastname?: string,
    mail?: string,
    password?: string,
  ) {
    this.id = id || 0;
    this.firstname = firstname || '';
    this.lastname = lastname || '';
    this.mail = mail || '';
    this.password = password || '';
  }

  public getId(): number {
    return this.id;
  }

  public getFirstname(): string {
    return this.firstname;
  }

  public getLastname(): string {
    return this.lastname;
  }

  public getMail(): string {
    return this.mail;
  }

  public getPassword(): string {
    return this.password;
  }

  public setId(value: number): void {
    this.id = value;
  }

  public setFirstname(value: string): void {
    this.firstname = value;
  }

  public setLastname(value: string): void {
    this.lastname = value;
  }

  public setMail(value: string): void {
    this.mail = value;
  }

  public setPassword(value: string): void {
    this.password = value;
  }

  public static buildOne(user: any): User {
    return new User(
      user.id,
      user.firstname,
      user.lastname,
      user.mail,
      user.password,
    );
  }
}
