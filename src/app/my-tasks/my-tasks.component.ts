import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTasksComponent implements OnInit {

  private startingtimeinput = '';
  private endingtimeinput = '';
  private timespentinput = '';

  meals: string[] = [
    'meal 1: crisp butty on toast',
    'meal 2: beans on toast drizzled with cheese sauce',
    'meal 3: onion soup in pitta bread',
    'meal 4: bak choi drizzled with cheese sauce',
    'meal 5: yorkshire pudding on a bed of cabbage',
    'meal 6: sausage with a side salad',
    'meal 7: avacado maki with chips',
    'meal 8: cheeseburger wrapped in streaky bacon',
    'meal 9: battered mars bar on toast',
    'meal 1: crisp butty on toast',
    'meal 2: beans on toast drizzled with cheese sauce',
    'meal 3: onion soup in pitta bread',
    'meal 4: bak choi drizzled with cheese sauce',
    'meal 5: yorkshire pudding on a bed of cabbage',
    'meal 6: sausage with a side salad',
    'meal 7: avacado maki with chips',
    'meal 8: cheeseburger wrapped in streaky bacon',
    'meal 9: battered mars bar on toast',
    'meal 1: crisp butty on toast',
    'meal 2: beans on toast drizzled with cheese sauce',
    'meal 3: onion soup in pitta bread',
    'meal 4: bak choi drizzled with cheese sauce',
    'meal 5: yorkshire pudding on a bed of cabbage',
    'meal 6: sausage with a side salad',
    'meal 7: avacado maki with chips',
    'meal 8: cheeseburger wrapped in streaky bacon',
    'meal 9: battered mars bar on toast',
  ];
  page: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
