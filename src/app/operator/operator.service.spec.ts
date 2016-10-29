/* tslint:disable:no-unused-variable */

import {TestBed, async, inject, fakeAsync} from '@angular/core/testing';
import {OperatorService} from './operator.service';
import {HttpModule} from "@angular/http";

describe('Service: Operator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperatorService],
      imports: [HttpModule]
    });
  });

  it('should ...', fakeAsync(inject([OperatorService], (service: OperatorService) => {
    var operators = service.getOperators();
    return operators.then((data)=> {
      expect(data.length).toBe(10);
    })
  })));
});
