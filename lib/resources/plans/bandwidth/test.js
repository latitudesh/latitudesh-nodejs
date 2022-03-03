import Maxihost from "../../../maxihost.js";
const maxihostApi = new Maxihost("fake token");

beforeEach(() => {
  jest.resetAllMocks();
})

describe("get bandwidth plans", () => {
  it("list bandwidth plans", async () => {
    const path = "/plans/bandwidth";
    Maxihost._get = jest.fn(() => {
      return {
        "body": {
          "success": true
        }
      };
    });
    maxihostApi.Plans.Bandwidth.list();
    await expect(Maxihost._get).toHaveBeenCalledWith(path, Maxihost._headers);
  });
})

describe("update bandwidth plans", () => {
  it("updates plan", async () => {
    const path = "/plans/bandwidth";
    Maxihost._post = jest.fn(() => {
      return {
        "body": {
          "success": true
        }
      };
    });
    maxihostApi.Plans.Bandwidth.update({ });
    await expect(Maxihost._post).toHaveBeenCalledWith(path, Maxihost._headers, {});
  });
})

