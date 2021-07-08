import { AppError } from "../../../../AppErros";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("Users not found", 400);
    }

    if (!user.admin) {
      throw new AppError("Users not found", 400);
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
