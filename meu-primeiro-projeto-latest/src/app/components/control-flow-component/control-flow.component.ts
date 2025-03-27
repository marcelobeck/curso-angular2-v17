import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-control-flow-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {

  letra: string = 'A'; 

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3'
  ]).pipe(delay(3000));

  public trackByFn(index: number) {
    return index;
  }

  public itens = [{ name: 'Marcelo' }];

}