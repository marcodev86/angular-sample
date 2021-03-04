import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {OnPushService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'onpush';


  constructor(public onPushService: OnPushService) {
  }

  ngOnInit(): void {
    this.onPushService.getData().subscribe(data =>
      console.info(`${JSON.stringify(data)}`)
    );
  }

}
