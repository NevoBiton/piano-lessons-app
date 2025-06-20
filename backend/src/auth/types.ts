import { UserRole } from '../user/entity/user.entity';

export interface JwtPayload {
  sub: string;
  role: UserRole;
}
