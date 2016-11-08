import {Pipe} from "@angular/core";
import {PipeTransform} from "@angular/core";
@Pipe({
  name: 'print'
})
export class PrettyPrintPipe implements PipeTransform {
  transform(val:any) {
    let cache:any[] = []
    if (!val)return "no data"
    return JSON.stringify(val, function(key, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    }, 2)
      .replace(' ', '&nbsp;')
      .replace('\n', '<br/>');
  }
}
