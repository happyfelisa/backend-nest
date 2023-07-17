import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MineralesModule } from './minerales/minerales.module';
import { RecorridosModule } from './recorridos/recorridos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '0103',
      database: 'base8',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsuariosModule,
    MineralesModule,
    RecorridosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
