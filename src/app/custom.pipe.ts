import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(name: string,gender: string): string {
    if(gender == "male"){
      name = "Mr. "+name;
    }else{
      name = "Ms. "+name;
    }
    return name;
  }

}
