import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity/usuario.entity';
@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  providers: [UsuariosService],
  controllers: [UsuariosController],
  exports: [UsuariosService],
})
export class UsuariosModule {}
