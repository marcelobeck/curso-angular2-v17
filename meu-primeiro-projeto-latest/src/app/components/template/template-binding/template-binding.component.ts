import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = "Marcelo";
  public age = 40;

  public sum() {
    return this.age++;
  }
}
