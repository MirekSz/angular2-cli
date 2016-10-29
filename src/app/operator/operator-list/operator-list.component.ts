import { Component, OnInit } from '@angular/core';
import {Operator, OperatorService} from "../operator.service";

@Component({
  selector: 'operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.css']
})
export class OperatorListComponent implements OnInit {
  operators: Operator[];
  selected: Operator;

  constructor(private operatorService: OperatorService) {

  }

  ngOnInit(): void {
    this.operatorService.getOperators().then((operators)=> {
      this.operators = operators;
    });
  }

  select(id: number): void {
    console.log('selected: ', id);
    this.operatorService.getOperator(id).then((op)=> {
      this.selected = op;
    })
  }
}

