import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { RabbitMQ } from "../constans";

@Injectable()
export class ClientProxyUsuarioTareas{
    constructor(private readonly config:ConfigService){}

    clientProxyUsers(): ClientProxy{
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options:{
                urls: this.config.get('AMQP_URL'),
                queue: RabbitMQ.UserQueue,
            }
        })
    }

    clientProxyTasks(): ClientProxy{
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options:{
                urls: this.config.get('AMQP_URL'),
                queue: RabbitMQ.TasksQueue,
            }
        })
    }
}