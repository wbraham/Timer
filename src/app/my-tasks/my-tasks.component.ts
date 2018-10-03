import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TasksService } from '../shared/task.service';
import { Response } from '@angular/http';

@Component({
  selector: 'my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css'],
})
export class MyTasksComponent implements OnInit {

  //task description variable
  description = '';

  //task starting time variable
  startingtimeinput = '';

  //task ending time variable
  endingtimeinput = '';

  //task duration variable
  timespentinput = '';

  tasks : [{
    description : string,
    starttime : string,
    endtime : string,
    timespent : string
  }]

  myTask: string[] = [];

  page: number = 1;

  constructor(private taskService : TasksService) { 
    this.displayTasks();
  }

  ngOnInit() {
  }

  displayTasks(){
    this.taskService.getTasks().subscribe(
      (data : Response) => {
        this.tasks = JSON.parse(data.text());
       for (var x=0;x<this.tasks.length;x++){
        this.myTask.push(this.tasks[x].description+"$#"+
        this.tasks[x].starttime+"$#"+
        this.tasks[x].endtime+"$#"+
        this.tasks[x].timespent);
      }
     },
      (error)=>{console.log(error)
       console.log('not found!');
        }
    );

  }

  addTaskManually(){
    if(this.description.length==0){
      this.description = 'NO DESCRIPTION';
    } 
    const task: Task = {
      description : this.description,
      starttime : this.startingtimeinput,
      endtime : this.endingtimeinput,
      timespent : this.timespentinput
    };
    this.taskService.addTask(task.description,task.starttime,task.endtime,task.timespent).subscribe(
      (res)=>{
          console.log(res);
          window.alert("Task successfully added!");
          location.reload();
      } ,
      (error) => {
        console.log(error);
      }
    );
  }

}
