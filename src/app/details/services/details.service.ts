import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  constructor() { }

  _value: number = 0;

  public Increment(): void {
    this._value++;
  }

   public set Value(value: number) {
    this._value = value;
  }

  public get Value () {
    return this._value;
  }
}
