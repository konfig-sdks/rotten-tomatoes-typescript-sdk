import { RottenTomatoes } from "./index";

describe("rotten-tomatoes-typescript-sdk", () => {
    it("initialize client", async () => {
        const rottentomatoes = new RottenTomatoes({
            apiKey: "API_KEY",
        });
    });
});
