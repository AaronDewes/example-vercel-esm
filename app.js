// Convert the CommonJS require to ESM import syntax
import { Probot } from 'probot';

/**
 * @param {Probot} app
 */
export default (app) => {
  app.log("Yay! The app was loaded!");

  app.on("issues.opened", async (context) => {
    return context.octokit.issues.createComment(
      context.issue({ body: "Hello, World!" })
    );
  });
};
