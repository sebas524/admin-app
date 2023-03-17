import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: [],
})
export class IncreaserComponent {
  @Input() progressValue: number = 10;
  @Input() btnClass: string = 'btn btn-primary';
  @Output() outputValue: EventEmitter<number> = new EventEmitter();

  changeValue(value: number) {
    if (this.progressValue >= 100 && value >= 0) {
      this.outputValue.emit(100);
      return (this.progressValue = 100);
    }
    if (this.progressValue <= 0 && value < 0) {
      this.outputValue.emit(0);
      return (this.progressValue = 0);
    }

    this.progressValue = this.progressValue + value;
    return this.outputValue.emit(this.progressValue);
  }

  onChange(event: number) {
    if (event >= 100) {
      this.progressValue = 100;
    } else if (event <= 0) {
      this.progressValue = 0;
    } else {
      this.progressValue = event;
    }
    this.outputValue.emit(this.progressValue);
  }
}
