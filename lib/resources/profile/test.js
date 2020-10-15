import Maxihost from "../../maxihost.js";

const maxihostApi = new Maxihost("fake token");
const headers = {
  Authorization: "Bearer fake token",
  "Content-Type": "application/json",
  Accept: "application/vnd.maxihost.v2+json",
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe("get user profile", () => {
  it("call get request to return user profile", async () => {
    const path = "/user/profile";
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Profile.get();
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers);
  });

  it("call get request with wrong params", async () => {
    const error = new Error("Async error");
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Profile.get().catch((e) => {
      expect(e).toBe(error);
    });
  });
});
