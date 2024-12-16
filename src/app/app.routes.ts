import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

export const routes: Routes = [
    {path: 'task-list', title: 'Lista de tarefas', component: TaskListComponent},
    {path: 'task-details/:id', title: 'Detalhes da tarefa', component: TaskDetailsComponent},
    {path: '', redirectTo:'task-list', pathMatch: 'full'}
    {path: }
];

