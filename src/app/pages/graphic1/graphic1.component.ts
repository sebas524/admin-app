import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: [],
})
export class Graphic1Component {
  public labels1: string[] = ['tacos', 'drinks', 'chips'];
  public labels2: string[] = ['pepsi', 'cake', 'kuchen'];
  public labels3: string[] = ['pizza', 'empanadas', 'burgers'];
  public labels4: string[] = ['chocolate', 'candy', 'marshmellows'];
  public data1: any = [35, 45, 10, 20];

  public data2: any = [99, 85, 42];
  public data3: any = [33, 710, 78];
  public data4: any = [55, 66, 22];
}
