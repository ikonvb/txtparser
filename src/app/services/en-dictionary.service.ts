import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class EnDictionaryService {
  map = new Map<string, string[]>();
  resString = '';
  array = [];

  result: string | ArrayBuffer | null = '';
  constructor() {}

  readFile(file: any) {
    const fr = new FileReader();

    fr.readAsText(file);

    fr.onload = () => {
      const res: string = fr.result as string;
      const array = res?.split('\r\n').map((line: string) => {
        return line.split(',');
      });

      for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
          this.map.set(array[i][0], array[i + 1]);
        }
      }

      let i = 1;
      for (let entry of this.map.entries()) {
        this.resString += `(${i}, "${entry[0].trim()}", "${this.parseWord(
          entry[1]
        )}"),\n`;
        i++;
      }

      console.log(this.resString);
      this.saveFile();
    };
  }

  parseWord(arr: string[]) {
    let res: string[] = [];

    for (let words of arr) {
      res.push(words.trim());
    }

    return res;
  }

  saveFile() {
    const blob = new Blob([this.resString], {
      type: 'text/plain;charset=utf-8',
    });
    saveAs(blob, 'save-me.txt');
  }
}
