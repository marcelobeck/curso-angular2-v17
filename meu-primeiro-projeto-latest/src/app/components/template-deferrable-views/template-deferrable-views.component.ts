import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ControlFlowComponent } from '../control-flow-component/control-flow.component';

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [CommonModule, ControlFlowComponent],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {

}
