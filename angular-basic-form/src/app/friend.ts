export class Friend {
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phoneNumber: string;
  private _favouriteLanguage: string;

  constructor(fname: string, lname: string, email: string, phoneNumber: string, favouriteLanguage: string) {
    this._firstName = fname;
    this._lastName = lname;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._favouriteLanguage = favouriteLanguage;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get email(): string {
    return this._email;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  get favouriteLanguage(): string {
    return this._favouriteLanguage;
  }
}
