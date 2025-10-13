import { Component } from '@angular/core';

export class Todo{
  constructor(
    public NO :number,
    public TASK:string,
    public STATUS:string,
    public PRIORITY:string,
    public DUE_DATE :Date
  ){}
}
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent {

  todos = [
    new Todo (1, 'Complete this project before diwali 2025!!','pending',"HIGH", new Date()),
    new Todo (2, 'o play Badminton','pending',"MEDIUM", new Date()),
    new Todo (3, 'Go have a cofee!','pending',"LOW", new Date())
  ]

  // todos =[
  //   {NO:1,TASK:"Complete this project before diwali 2025!!", STATUS:'Pending',PRIORITY:"HIGH", DUE_DATE :'22/10/2025'},
  //   {NO:1,TASK:"G", STATUS:'Pending',PRIORITY:"MEDIUM", DUE_DATE :'16/10/2025'},
  //   {NO:1,TASK:"Go have a cofee!", STATUS:'Pending',PRIORITY:"LOW", DUE_DATE :'14/10/2025'}
  // ]
}
