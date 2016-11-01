import {Component, OnInit, OnChanges, SimpleChanges, Input, EventEmitter, Output} from '@angular/core';
import {Operator, OperatorService} from "../operator.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'operator-details',
  templateUrl: './operator-details.component.html',
  styleUrls: ['./operator-details.component.css']
})
export class OperatorDetailsComponent implements OnInit,OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('busS')
  }

  @Input()
  operator: Operator;
  editMode: boolean = false;
  @Output() operationState: EventEmitter<any> = new EventEmitter();

  constructor(private operatorService: OperatorService, private router: ActivatedRoute) {

  }

  changeEditMode() {
    this.editMode = !this.editMode;
  }

  commit(event: any) {
    if (event.keyCode == 13)
      this.editMode = false;
    this.operationState.emit({editionDone:true});
  }


  ngOnInit(): void {
    console.log('this.router.params: ');
    this.router.params.forEach((param)=> {
      var id = param['id'];
      this.operatorService.getOperator(Number.parseInt(id)).then((op)=>this.operator = op);
    });
    console.log('Details: ');
  }
}
