import {ApiOperation, ApiResponse, ApiParam} from "openapi-metadata/decorators";
import {Request, Response, Router, json} from "express";
import {User} from "../models/User";
import {users} from "../data/users";

export class UserController {
  @ApiOperation({
    operationId: "listUsers",
    methods: ["get"],
    path: "/users",
    summary: "List users",
    description: "List all users",
  })
  @ApiResponse({
    type: [User],
  })
  list(req: Request, res: Response) {
    res.json(users);
  }

  @ApiOperation({
    operationId: "getUserById",
    methods: ["get"],
    path: "/users/{id}",
    summary: "Get user by id",
    description: "Get user by identifier",
  })
  @ApiResponse({type: User})
  @ApiParam({
    name: "id",
    type: "string",
    description: "User identifier",
    required: true,
  })
  get(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const user = users.find((u: User) => u.id === id);

    if (!user) {
      res.status(404).json({message: "User not found"});
      return;
    }

    res.json(user);
  }
}

const userController = new UserController();

const router = Router();

router.use(json());

router.get("/", userController.list);
router.get("/:id", userController.get);

export default router;
