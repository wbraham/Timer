import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../shared/task.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    tasks : [{
      description : string,
      starttime : string,
      endtime : string,
      timespent : string
    }]

    // search bar input
    searchDescription ='';

    // array of Tasks used while displaying tasks
    myTask: string[] = [];

    constructor(private taskService : TasksService) {}

    ngOnInit() {}

    searchTask(){
      this.taskService.findTask(this.searchDescription).subscribe(
        (data : Response) => {
          this.tasks = JSON.parse(data.text());
          if (this.tasks.length<=0){
            alert("No Task Found With This Description");
          } else {
          for (var x=0;x<this.tasks.length;x++){
            var timing = this.tasks[x].timespent;
            var hour = timing.split(':')[0];
            var minute = timing.split(':')[1];
            var second = timing.split(':')[2];
            if (hour.length==1){
             hour = "0"+hour;
            }
            if (minute.length==1){
             minute = "0"+minute;
           }
           if (second.length==1){
             second = "0"+second;
           }
           timing = hour+":"+minute+":"+second;
            alert("Task description: "+this.tasks[x].description+"\n"
              +"Starting Time: "+this.tasks[x].starttime+"\n"
              +"Ending Time: "+this.tasks[x].endtime+"\n"
              +"Time Spent On Task: "+timing
            );
          }
        }
       },
        (error)=>{console.log(error)
        }
      );
    }

}
