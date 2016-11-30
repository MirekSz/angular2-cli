import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePresenter',
  pure:false
})
export class NamePresenterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }



}
