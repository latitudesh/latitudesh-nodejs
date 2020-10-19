import Maxihost from "../../../maxihost.js";
const maxihostApi = new Maxihost("fake token");

const searchParams = { page: "1" };
const searchParamsParsed = "page=1";

beforeEach(() => {
  jest.resetAllMocks();
});

describe("list regions", () => {
  it("call get request with right params", async () => {
    const path = "/regions/";
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Account.Regions.list(searchParams);
    await expect(Maxihost._get).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      searchParamsParsed
    );
  });

  it("call get request with wrong params", async () => {
    const error = new Error("Async error");
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Account.Regions.list().catch((e) => {
      expect(e).toBe(error);
    });
  });
});
