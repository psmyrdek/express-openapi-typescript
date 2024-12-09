import "reflect-metadata";
import {writeFile} from "fs/promises";
import {generateDocument, OpenAPIDocument} from "openapi-metadata";
import {UserController} from "./routes/user-routes";

(async () => {
  try {
    const document: OpenAPIDocument = await generateDocument({
      controllers: [UserController],
      document: {
        info: {
          title: "Users API",
          version: "1.0.0",
        },
      },
    });

    await writeFile("./public/openapi.json", JSON.stringify(document, null, 2));
  } catch (error) {
    console.error(error);
  }
})();
