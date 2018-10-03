import { Injectable } from "@angular/core";
import { Http , Headers} from "@angular/http";
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new Headers({
      'Accept':  'application/json',
      'Content-Type': 'application/json'
    })
};

@Injectable()
export class TasksService {

  constructor(private http: Http) {}

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
  
  getTasks(){
    return this.http.get('http://localhost:3000/api/tasks',httpOptions)
      .pipe(map(res =>  res));
  }
}