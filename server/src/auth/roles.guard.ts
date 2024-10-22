import { CanActivate, ExecutionContext, ForbiddenException, Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { ROLES_KEY } from "./roles.decorator";


@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private readonly jwtService: JwtService,
              private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);

      if (!requiredRoles) {
        return true;
      }
      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
      const [bearer, token] = authHeader.split(' ');

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException('Пользователь не авторизован');
      }

      const user = this.jwtService.verify(token);
      req.user = user;
      const checkRole = requiredRoles.includes(user.role.value);

      if (!checkRole) {
        throw new ForbiddenException('Нет доступа');
      }

      return true;

    } catch(e) {
      throw new ForbiddenException('Нет доступа');
    }
  }
}