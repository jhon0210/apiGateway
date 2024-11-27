import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
import { UserMSG } from 'src/common/constans';
import { ClientProxyUsuarioTareas } from 'src/common/proxy/client-proxy';
import { UserDTO } from 'src/user/dto/user.dto';
// import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    
    constructor(
        private readonly clientProxy: ClientProxyUsuarioTareas, 
        private readonly jwtService:JwtService
    ) {}

    private _clientProxyUser = this.clientProxy.clientProxyUsers();
    async validateUser(username:string, password:string): Promise<any> {
        const user = await this._clientProxyUser
        .send(UserMSG.VALID_USER, {
            username,
            password
        })
        .toPromise();


        if (user) return user;

        return null;
    }

    async signIn(user:any) {
        const payload = {
            username: user.username,
            sub: user._id,
        };

        return { access_token: this.jwtService.sign(payload) };
    }

    async signUp(userDTO:UserDTO) {
        return await this._clientProxyUser.send(UserMSG.CREATE, userDTO).toPromise();   
    }
}
