import Maxihost from "../../../maxihost.js";

const deviceId = 4;
const maxihostApi = new Maxihost("fake token");

const searchParams = { "limit": 0 };
const searchParamsParsed = "limit=0";

beforeEach(() => {
  jest.resetAllMocks();
})
describe("list ips", () => {
  it("call get request with right params", async () => {
    const path = "/devices/" + deviceId + "/ips";
    Maxihost._get = jest.fn(() => {
      return { "body": { "success": true } }
    });
    maxihostApi.Device.Ips.list(deviceId, searchParams);
    await expect(Maxihost._get).toHaveBeenCalledWith(path, Maxihost._headers, searchParamsParsed);
  });

  it("call get request with wrong params", async () => {
    const error = new Error("Async error")
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Device.Ips.list(deviceId, searchParams).catch(
      e => { expect(e).toBe(error) }
    );
  })
})
