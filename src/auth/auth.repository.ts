import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CustomRepository } from '../common/typeorm.decorator';

@CustomRepository(User)
export class AuthRepository extends Repository<User> {}
