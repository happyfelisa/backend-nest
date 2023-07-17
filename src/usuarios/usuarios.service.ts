import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UsuarioEntity } from './usuario.entity/usuario.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly userRepository: Repository<UsuarioEntity>,
  ) {}
  async createUser(correo: string, password: string): Promise<UsuarioEntity> {
    const user = this.userRepository.create();
    user.correo = correo;
    user.password = await bcrypt.hash(password, 10);
    return this.userRepository.save(user);
  }

  async getUser(correo: string): Promise<UsuarioEntity> {
    return this.userRepository.findOne({ where: { correo } });
  }

  async validateUser(correo: string, password: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { correo } });
    if (user && (await bcrypt.compare(password, user.password))) {
      return true;
    }
    return false;
  }
}
