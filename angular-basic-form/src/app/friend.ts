export class Friend {
  private _firstName: string | null;
  private _lastName: string | null;
  private _email: string | null;
  private _phoneNumber: string| null;
  private _favouriteLanguage: string| null;

  constructor(fname: string| null, lname: string| null, email: string| null, phoneNumber: string| null, favouriteLanguage: string| null) {
    this._firstName = fname;
    this._lastName = lname;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._favouriteLanguage = favouriteLanguage;
  }

  get firstName(): string | null {
    return this._firstName;
  }

  get lastName(): string | null {
    return this._lastName;
  }

  get email(): string | null{
    return this._email;
  }

  get phoneNumber(): string| null {
    return this._phoneNumber;
  }

  get favouriteLanguage(): string| null {
    return this._favouriteLanguage;
  }


  set firstName(value: string | null) {
    this._firstName = value;
  }

  set lastName(value: string | null) {
    this._lastName = value;
  }

  set email(value: string | null) {
    this._email = value;
  }

  set phoneNumber(value: string | null) {
    this._phoneNumber = value;
  }

  set favouriteLanguage(value: string | null) {
    this._favouriteLanguage = value;
  }
}
