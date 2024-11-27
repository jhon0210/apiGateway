import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TaskMSG } from 'src/common/constans';
import { ITask } from 'src/common/interfaces/taks.interface';
import { ClientProxyUsuarioTareas } from 'src/common/proxy/client-proxy';
import { TaskDTO } from './dto/task.dto';


@Controller('api/v2/tasks')
export class TasksController {
    constructor(private readonly clientProxy: ClientProxyUsuarioTareas){}
    private _clientProxyTasks = this.clientProxy.clientProxyTasks();
    @Post()
    create(@Body() taskDTO: TaskDTO): Observable<ITask>{
        return this._clientProxyTasks.send(TaskMSG.CREATE, taskDTO);
    }

    @Get()
    findAll(): Observable<ITask[]> {
        return this._clientProxyTasks.send(TaskMSG.FIND_ALL, '');
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() taskDTO: TaskDTO): Observable<ITask> {
        return this._clientProxyTasks.send(TaskMSG.UPDATE, { id, taskDTO });
    }

    @Delete(':id')
    delete(@Param('id') id:string): Observable<any> {
        return this._clientProxyTasks.send(TaskMSG.DELETE, id);
    }
}
