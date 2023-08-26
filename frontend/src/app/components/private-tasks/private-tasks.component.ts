import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  privateTaks = []

  constructor(private privateTasksService: TasksService) { }

  ngOnInit() {
    this.privateTasksService.getPrivateTasks()
      .subscribe(
        response => {
          this.privateTaks = response
        },
        error => console.log(error)
      )
  }
}
