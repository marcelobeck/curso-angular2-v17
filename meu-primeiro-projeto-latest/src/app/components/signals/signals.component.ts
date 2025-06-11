
import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-signals-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

    public firstName = signal('Marcelo');
    public lastName = signal('Teste');

    // public fullName = this.firstName() + this.lastName()
    public fullName =  computed( () => {
        return this.firstName() + this.lastName()
    })

    public array = [1]

    constructor(){}


    updateName(){

    }

    updateArray(){

    }
}