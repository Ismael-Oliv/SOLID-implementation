import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    const id = String(user_id);

    console.log(id);
    const users = this.listAllUsersUseCase.execute({ user_id: id });

    return response.json(users);
  }
}

export { ListAllUsersController };
