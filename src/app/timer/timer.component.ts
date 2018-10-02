import { Component, OnInit } from '@angular/core';
import {Subscription, Observable} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  private time = 0;
  private seconds = 0;
  private minutes = 0;
  private hours = 0;
  private subscription: Subscription;

  //seconds counter
  private timer : Observable<number>;

  //button status
  private activePlayBtn = false;
  private activePauseBtn = false;
  private activeStopBtn = false;
  
  //task description variable
  description = '';

  //task starting time variable
  startedAt = '';

  //task ending time variable
  endedAt = '';

  constructor() { 
  }

  ngOnInit() {
  }

  // start timer method
  playTime(){
    var startDateTime = new Date();
    var startDate = startDateTime.getFullYear()+'-'+(startDateTime.getMonth()+1)+'-'+startDateTime.getDate();
    var startTime = startDateTime.getHours() + ":" + startDateTime.getMinutes() + ":" + startDateTime.getSeconds();
    this.startedAt = 'date: '+startDate +' - time: '+startTime;
    this.timer = TimerObservable.create(0, 1000);
    this.subscription = this.timer.subscribe(t => {
      if (t<60){
        this.seconds = t;
      }
      else {
        this.minutes=~~(t/60);
        this.seconds = t%60;
        if (this.minutes>60){
          this.hours=~~(this.minutes/60);
          this.minutes=this.minutes%60;
        }
      }
    });
    var element = <HTMLInputElement> document.getElementById("btnplay");
    element.disabled = true;
    this.activePlayBtn = false;
    this.activePauseBtn = true;
    this.activeStopBtn = true;
    console.log(this.startedAt);
  }

  // pause timer method
  pauseTime(){
    this.subscription.unsubscribe();
    this.time = this.hours*3600+this.minutes*60+this.seconds;
    this.activePlayBtn=true;
    this.activePauseBtn = false; 
    this.activeStopBtn = true;
    console.log(this.time);
  }

  // resume timer method
  onResumeTime(){
    this.activePauseBtn=true;
    this.activeStopBtn = true;
    this.activePlayBtn=true;
    this.timer = TimerObservable.create(0, 1000);
    this.subscription = this.timer.subscribe(t => {
      t+=this.time;
      if (t<60){
        this.seconds = t;
      }
      else {
        this.minutes=~~(t/60);
        this.seconds = t%60;
        if (this.minutes>60){
          this.hours=~~(this.minutes/60);
          this.minutes=this.minutes%60;
        }
      }
    });
    var element = <HTMLInputElement> document.getElementById("btnplay");
    element.disabled = true;
  }

  // stop timer method
  stopTime(){
    this.activePlayBtn=false;
    this.activeStopBtn = false;
    this.activePauseBtn = false;
    var startDateTime = new Date();
    var startDate = startDateTime.getFullYear()+'-'+(startDateTime.getMonth()+1)+'-'+startDateTime.getDate();
    var startTime = startDateTime.getHours() + ":" + startDateTime.getMinutes() + ":" +startDateTime.getSeconds();
    this.endedAt = 'date: '+startDate +' - time: '+startTime;
    console.log('durée: '+this.hours+":"+this.minutes+":"+this.seconds);
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.subscription.unsubscribe();
    if(this.description.length==0){
      console.log('Message: NO TITLE');
    } else {
    console.log('Message: '+this.description);
    }
    console.log('Task started at: '+this.startedAt);
    console.log('Task ended at: '+this.endedAt);
    var element = <HTMLInputElement> document.getElementById("btnplay");
    element.disabled = false;
  }

}
