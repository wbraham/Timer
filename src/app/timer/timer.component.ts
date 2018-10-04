import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription, Observable} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { TasksService } from '../shared/task.service';
import { Task } from '../model/task.model';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  // total counted seconds
  private time = 0;

  //time variables
  private seconds = 0;
  private minutes = 0;
  private hours = 0;

  // subscription for timer
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

  //task duration variable
  timeSpent = '';

  constructor(private taskService : TasksService) { }

  ngOnInit() {
  }

  ngOnDestroy(){
    if (this.activeStopBtn===true){
      alert("You'll loose the current tracking!");
    }
  }

  // start timer method
  playTime(){
    var fullDate= new Date().toISOString().substr(0, 19);
    var startDate = fullDate.split('T')[0];
    var startTime = fullDate.split('T')[1];
    this.startedAt = "Date: "+startDate+", Time: "+startTime;
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
  }

  // pause timer method
  pauseTime(){
    this.subscription.unsubscribe();
    this.time = this.hours*3600+this.minutes*60+this.seconds;
    this.activePlayBtn=true;
    this.activePauseBtn = false; 
    this.activeStopBtn = true;
    var elements = <HTMLInputElement> document.getElementById("btnplay");
    elements.disabled = false;
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
    var elements = <HTMLInputElement> document.getElementById("btnplay");
    elements.disabled = true;
  }

  // stop timer method
  stopTime(){
    this.activePlayBtn=false;
    this.activeStopBtn = false;
    this.activePauseBtn = false;

    var fullDate = new Date().toISOString().substr(0, 19);
    var endDate = fullDate.split('T')[0];
    var endTime = fullDate.split('T')[1];
    this.endedAt = "Date: "+endDate+", Time: "+endTime;
    this.timeSpent = this.hours+":"+this.minutes+":"+this.seconds;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.subscription.unsubscribe();
    if(this.description.length==0){
      this.description = 'NO DESCRIPTION';
    } 
    const task: Task = {
      description : this.description,
      starttime : this.startedAt,
      endtime : this.endedAt,
      timespent : this.timeSpent
    };
    this.taskService.addTask(task.description,task.starttime,task.endtime,task.timespent).subscribe(
      (res)=>{
          console.log(res);
          window.alert("Task successfully added!");
      } ,
      (error) => {
        console.log(error);
        alert("Can\'t save task");
      }
    );
    var element = <HTMLInputElement> document.getElementById("btnplay");
    element.disabled = false;
  }
}
