import { Request, Response } from "express";

import App from "@modules/app";
import Endpoint from "@typings/Route";
import { getFileFromPath } from "@helpers/filesystem";
import { registerNewDevice } from "@helpers/database";
import { success } from "@helpers/response";
import { rejectNoAuth } from "@middleware/authentication";

const fileName = getFileFromPath(__filename, __dirname);

export const generateToken: Endpoint = {
  name: "post:generate-token",
  method: "post",
  middleware: [rejectNoAuth],
  path: `/${fileName}`,
  callback: async function (this: App, req: Request, res: Response) {
    const data = await registerNewDevice();
    success(res, data);
  },
};
