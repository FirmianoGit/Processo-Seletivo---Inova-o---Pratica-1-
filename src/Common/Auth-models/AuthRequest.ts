import { Request } from 'express';
import { User } from '../../Database/Entities/user.entity';

export interface AuthRequest extends Request {
  user: User;
}
