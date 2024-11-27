import { Module } from "@nestjs/common";
import { ClientProxyUsuarioTareas } from "./client-proxy";

@Module({
    providers: [ClientProxyUsuarioTareas],
    exports: [ClientProxyUsuarioTareas],
})

export class ProxyModule {}