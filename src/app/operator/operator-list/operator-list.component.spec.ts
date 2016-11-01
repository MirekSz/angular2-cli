/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { OperatorListComponent } from './operator-list.component';
import {HttpModule} from "@angular/http";
import {OperatorService} from "../operator.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Component, Input} from "@angular/core";

describe('Component: OperatorList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperatorService],
      imports: [CommonModule,HttpModule],
      declarations:[OperatorListComponent,MockOperatorDetailsComponent]
    });
  });

  it('should create an instance', () => {
    let component = TestBed.createComponent(OperatorListComponent);
    component.componentInstance.operators=[{id:1,name:'mirek'}];
    component.detectChanges();
    var querySelector = component.nativeElement.querySelector("ul li");
    expect(querySelector.textContent).toContain('mirek');
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'operator-details',
  template:''
})
export class MockOperatorDetailsComponent  {
  @Input()
  operator: any;
}
