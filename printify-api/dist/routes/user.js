"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsersController = __importStar(require("../controllers/user"));
exports.userRouter = () => {
    const router = express_1.default.Router();
    router.get("/", UsersController.getAll);
    router.get("/:id", UsersController.get);
    router.post("/", UsersController.create);
    router.put("/:id", UsersController.update);
    router.delete("/:id", UsersController.remove);
    return router;
};
//# sourceMappingURL=user.js.map