import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { CommonModule } from '@angular/common';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponentComponent, TemplateBindingComponent],
  template: `<h1> Curso de Angular </h1>
  <app-template-binding />
  <app-new-component />
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}