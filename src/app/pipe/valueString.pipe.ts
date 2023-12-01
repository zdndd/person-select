import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'lodash';

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({ name: 'valueString' })
export class ExponentialStrengthPipe implements PipeTransform {
  transform(arr: any): any {
    return map(arr, 'value');
  }
}
