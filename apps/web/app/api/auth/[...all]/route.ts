import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "database/auth/server";

export const { POST, GET } = toNextJsHandler(auth);
