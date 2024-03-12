import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-ag12';
  b2cType = 'Number';

  @ViewChild('b2cEle', { static: true }) b2c: any;
  onTypeChange(type: string): void {
    console.log('onTypeChange----type changed to', type, 'b2cType', this.b2cType);
  }
  changeType(): void {
    this.b2cType = Math.random() > 0.5 ? 'Number' : 'Boolean'
  }

  b2cViewAction(): void {
    this.b2c.changeType('String');
  }
}
