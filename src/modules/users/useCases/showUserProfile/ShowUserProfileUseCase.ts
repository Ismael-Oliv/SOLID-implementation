import { AppError } from "../../../../AppErros";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const ExistentUser = this.usersRepository.findById(user_id);

    if (!ExistentUser) {
      throw new AppError("User does not exists", 404);
    }

    return ExistentUser;
  }
}

export { ShowUserProfileUseCase };
