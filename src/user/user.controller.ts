import { Controller, Body, Post, Get, Put, Delete, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserDTO } from './dto/user.dto';
import { ClientProxyUsuarioTareas } from './../common/proxy/client-proxy';
import { IUser } from 'src/common/interfaces/user.interface';
import { UserMSG } from 'src/common/constans';


@Controller('api/v1/user')
export class UserController {
    constructor(private readonly clientProxy: ClientProxyUsuarioTareas){}
    private _clientProxyUser = this.clientProxy.clientProxyUsers();
    @Post()
    create(@Body() userDTO: UserDTO): Observable<IUser>{
        return this._clientProxyUser.send(UserMSG.CREATE, userDTO);
    }

    @Get()
    findAll(): Observable<IUser[]> {
        return this._clientProxyUser.send(UserMSG.FIND_ALL, '');
    }

    // @Get(':id')
    // findOne(@Param('id') id:string): Observable<IUser> {
    //     return this._clientProxyUser.send(UserMSG.FIND_ONE, id);
    // }

    @Put(':id')
    update(@Param('id') id:string, @Body() userDTO: UserDTO): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.UPDATE, { id, userDTO });
    }

    @Delete(':id')
    delete(@Param('id') id:string): Observable<any> {
        return this._clientProxyUser.send(UserMSG.DELETE, id);
    }
}
