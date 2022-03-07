import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from "@angular/forms";

@Component({
  selector: 'c8y-widget-config-demo',
  template: `<div class="form-group">
    <c8y-form-group>
      <label translate>Text</label>
      <textarea style="width:100%" [(ngModel)]="config.text"></textarea>
    </c8y-form-group>
  </div>`,
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class WidgetConfigDemo {
  @Input() config: any = {};
}