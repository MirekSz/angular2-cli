import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorDetailsComponent } from './operator-details/operator-details.component';
import { OperatorListComponent } from './operator-list/operator-list.component';
import {OperatorService} from "./operator.service";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [CommonModule, HttpModule, FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: OperatorListComponent,
        children: []
      },
      {
        path: ':id',
        component: OperatorDetailsComponent,
        children: []
      }

    ])],
  providers: [OperatorService],
  declarations: [ OperatorDetailsComponent, OperatorListComponent],
  exports: [OperatorListComponent]
})
export class OperatorModule {
}
