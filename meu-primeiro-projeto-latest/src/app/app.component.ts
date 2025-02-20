import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TemplateBindingComponent } from './components/template-component/template-binding/template-binding.component';
import { ControlFlowComponent } from './components/control-flow-component/control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ControlFlowComponent, TemplateBindingComponent],
  template: `<h1> Curso de Angular </h1>
  <app-template-binding />
  <app-control-flow-component />
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}