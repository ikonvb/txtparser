import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParserComponent } from './components/parser/parser.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: 'parser', component: ParserComponent },
  { path: 'result', component: ResultComponent },
  { path: '', component: ParserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
