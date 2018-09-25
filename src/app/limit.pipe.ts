import { Pipe, PipeTransform } from '@angular/core';
import { elementStart } from '@angular/core/src/render3/instructions';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args)
    {
      let arr=[];
      for (let i=0; i<args;i++)
      {
        arr.push(value[i]);
      }
      return arr;
    }
    else
    {
      return value;
    }
  }

}
