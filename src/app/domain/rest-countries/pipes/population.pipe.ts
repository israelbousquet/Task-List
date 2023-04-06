import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'population',
})
export class PopulationPipe implements PipeTransform {
  transform(value: number): string {
    const populationFormated = value
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return populationFormated;
  }
}
