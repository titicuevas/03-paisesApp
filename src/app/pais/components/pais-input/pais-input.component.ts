import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  dbouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.dbouncer.pipe(
      debounceTime(300))
    .subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.dbouncer.next(this.termino);
  }
}
