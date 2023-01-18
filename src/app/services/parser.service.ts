import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ParserService {
  list: Set<string> | undefined;

  constructor() {}
}
