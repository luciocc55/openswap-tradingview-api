import { loginHandler, registerHandler } from "../app/controllers/auth.controller";

describe("Controller", () => {
  describe("Auth Controller", () => {
    it("expect loginHandler to be truthy", () => {
      expect(loginHandler).toBeTruthy();
    });

    it("expect registerHandler to be truthy", () => {
      expect(registerHandler).toBeTruthy();
    });
  });
});
