import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponentComponent {

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3'
  ]).pipe(delay(3000))

  public trackByFn(index: number) {
    return index;
  }

  public itens = [{nome: 'Marcelo'}]

}
