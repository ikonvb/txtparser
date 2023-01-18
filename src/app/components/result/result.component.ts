import { Component, OnInit } from '@angular/core';
import { EnDictionaryService } from 'src/app/services/en-dictionary.service';
import { ParserService } from 'src/app/services/parser.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  mapToShow = new Map<string, string[] | undefined>();
  listToShow: Set<string> | undefined;

  constructor(
    private parserService: ParserService,
    private enDicService: EnDictionaryService
  ) {}

  ngOnInit(): void {
    this.listToShow = this.parserService.list;
    this.translate();
  }

  translate() {
    if (this.listToShow) {
      for (let word of this.listToShow) {
        if (this.enDicService.map.has(word)) {
          this.mapToShow?.set(word, this.enDicService.map.get(word));
        }
      }
    }
  }

  clearTable() {
    this.parserService.list?.clear();
  }
}
