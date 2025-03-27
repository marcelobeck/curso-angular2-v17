import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TemplateBindingComponent } from './components/template-component/template-binding/template-binding.component';
import { ControlFlowComponent } from './components/control-flow-component/control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template-deferrable-views/template-deferrable-views.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ControlFlowComponent, TemplateBindingComponent, TemplateDeferrableViewsComponent],
  template: `<h1> Curso de Angular </h1>
  <!-- <app-template-binding />
  <app-control-flow-component /> -->

  <app-template-deferrable-views />
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}