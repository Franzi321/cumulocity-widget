import { Component, Input } from '@angular/core';

@Component({
  selector: 'c8y-widget-demo',
  template: `<p class="text">{{config?.text || 'No text'}}</p>`,
  styles: [ `.text { transform: scaleX(-1); font-size: 3em ;}` ]
})
export class WidgetDemo {
  @Input() config;
}