import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableData'
})
export class TableDataPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any { //takes data from table and if length is greater than 5 displays upto 10 characters
   // console.log(typeof value+""+value);
    let data=value+'';
    if(data.length>10){
      let resultValue='';
      for(let i=0;i<10;i++)
        resultValue=resultValue+data.charAt(i);
      return resultValue+'...';
    }
    return value;
  }

}
