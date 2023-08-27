import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  modalRef!: BsModalRef;

  privateTaks = []
  idUpdateTask = ''
  newTask: Task = {
    title: '',
    description: '',
    done: false
  }
  editTask: Task = {
    title: '',
    description: '',
    done: false
  }

  constructor(private privateTasksService: TasksService, private router: Router, private modalService: BsModalService) { }

  ngOnInit() {
    this.getTasks()
  }

  openModal(content: any, task: any) {
    this.idUpdateTask = task._id
    this.editTask = task
    this.modalRef = this.modalService.show(content)
  }

  getTasks() {
    this.privateTasksService.getPrivateTasks()
    .subscribe(
      response => this.privateTaks = response,
      error => console.log(error)
    )
  }

  saveTask() {
    this.privateTasksService.savePrivateTasks(this.newTask)
      .subscribe(
        response => this.router.navigate(['/']),
        error => console.log(error)
      )
    this.getTasks()
  }

  updateTask() {
    this.privateTasksService.updatePrivateTasks(this.editTask, this.idUpdateTask)
      .subscribe(
        response => this.router.navigate(['/']),
        error => console.log(error)
      )
    this.modalRef.hide()
    this.getTasks()
  }

  deleteTask(idTask: any) {
    this.privateTasksService.deletePrivateTasks(idTask)
      .subscribe(
        response => this.router.navigate(['/']),
        error => console.log(error)
      )
    this.getTasks()
  }

  updatePropertyTask(task: any) {
    this.privateTasksService.updatePropertyTasks(task, task._id)
      .subscribe(
        response => this.router.navigate(['/']),
        error => console.log(error)
      )
    this.getTasks()
  }
}
