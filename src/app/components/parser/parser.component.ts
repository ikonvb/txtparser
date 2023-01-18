import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnDictionaryService } from 'src/app/services/en-dictionary.service';
import { ParserService } from 'src/app/services/parser.service';

@Component({
  selector: 'app-parser',
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.scss'],
})
export class ParserComponent {
  textToParse = '';

  constructor(
    private router: Router,
    private parserService: ParserService,
    private enDicService: EnDictionaryService
  ) {}

  readFile(event: any) {
    let selectedFile = event.target.files[0];
    this.enDicService.readFile(selectedFile);
  }

  readInput(event: any) {
    this.textToParse = event.target.value;
  }

  clearText(event: any) {
    this.textToParse = '';
    event.target.value = '';
  }

  parseText() {
    this.parserService.list = this.readString(this.textToParse);
    if (this.parserService.list.size > 0) {
      this.router.navigateByUrl('/result');
    }
  }

  readString(rawText: string): Set<string> {
    let str = rawText.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    const data: string[] = str.split(' ');
    const list: string[] = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].length > 2) {
        list.push(data[i].toLowerCase().trim());
      }
    }
    list.sort();
    let newSet = new Set<string>(list);
    return newSet;
  }
}
