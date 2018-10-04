import { Injectable } from "@angular/core";
import { Http , Headers} from "@angular/http";
import { map } from 'rxjs/operators';

// headers
const httpOptions = {
    headers: new Headers({
      'Accept':  'application/json',
      'Content-Type': 'application/json'
    })
};

@Injectable()
export class TasksService {

  constructor(private http: Http) {}

  // adding tasks to database
  addTask(description,starttime,endtime,timespent){
    let contentBody = JSON.stringify({
        "description": description,
        "starttime": starttime,
        "endtime": endtime,
        "timespent": timespent
    });
    return this.http.post('http://localhost:3000/api/tasks',contentBody,httpOptions)
      .pipe(map(res =>  res));
  }
  
  // retrieving tasks from database by date
  getTasks(){
    return this.http.get('http://localhost:3000/api/tasks?filter[order]=starttime%20DESC',httpOptions)
      .pipe(map(res =>  res));
  }

  findTask(searchDescription){
    return this.http.get('http://localhost:3000/api/tasks?filter[where][description]='+searchDescription,httpOptions)
      .pipe(map(res =>  res));
  }
}