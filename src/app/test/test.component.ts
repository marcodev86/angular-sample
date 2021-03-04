import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Data} from '../data';

@Component({
  selector: 'app-test',
  templateUrl: 'test.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TestComponent implements OnInit {

  @Input() data$: Observable<Data>;

  constructor() {
  }

  ngOnInit(): void {
  }
}
