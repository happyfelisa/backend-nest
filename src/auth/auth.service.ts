import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsuariosService,
    private jwtService: JwtService,
  ) {}
  async signIn(correo: string, pass: string): Promise<any> {
    const user = await this.usersService.getUser(correo);
    console.log(correo);
    console.log(pass);
    console.log(user);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.idusuario, correo: user.correo };
    console.log('entre aqui');
    console.log(payload);
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
