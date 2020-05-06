const Maxihost = require("../../lib/maxihost.js");

const deviceId = 4;
const maxihostApi = new Maxihost("fake token");

const data = {
  "facility": "MH1",
  "plan": "type1",
  "hostname": "test",
  "operating_system": "centos",
  "billing_cycle": "monthly"
};

const searchParams = { "limit": 0 };
const searchParamsParsed = "limit=0";

beforeEach(() => {
  jest.resetAllMocks();
})

describe("get device", () => {
  it("call get request with right params", async () => {
    const path = "/devices/" + deviceId;
    Maxihost._get = jest.fn(() => {
      return { "body": { "success": true } };
    });
    maxihostApi.Device.get(deviceId);
    await expect(Maxihost._get).toHaveBeenCalledWith(path, { headers: Maxihost._headers });
  });

  it("call get request with wrong params", async () => {
    const path = "/devices/" + deviceId;
    const error = new Error("Async error")
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Device.get(deviceId).catch(
      e => { expect(e).toBe(error) }
    );
  })
})

describe("list devices", () => {
  it("call get request with right params", async () => {
    const path = "/devices";
    Maxihost._get = jest.fn(() => {
      return { "body": { "success": true } }
    });
    maxihostApi.Device.list(searchParams);
    await expect(Maxihost._get).toHaveBeenCalledWith(path, searchParamsParsed, {
      headers: Maxihost._headers
    });
  });

  it("call get request with wrong params", async () => {
    const error = new Error("Async error")
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Device.get(deviceId).catch(
      e => { expect(e).toBe(error) }
    );
  })
})

describe("create device", () => {
it("call post request with right params", async () => {
    const path = "/devices";
    Maxihost._post = jest.fn(() => {
      return { "body": { "success": true } }
    });
    maxihostApi.Device.create(data);
    await expect(Maxihost._post).toHaveBeenCalledWith(path, data, { headers: Maxihost._headers });
  });

  it("call get request with wrong params", async () => {
    const error = new Error("Async error")
    Maxihost._post = jest.fn().mockRejectedValue(error);
    await maxihostApi.Device.create(data).catch(
      e => { expect(e).toBe(error) }
    );
  })
})

describe("delete device", () => {
  it("call get request with right params", async () => {
    const path = "/devices/" + deviceId;
    Maxihost._delete = jest.fn(() => {
      return { "body": { "success": true } }
    });
    maxihostApi.Device.delete(deviceId);
    await expect(Maxihost._delete).toHaveBeenCalledWith(path, { headers: Maxihost._headers });
  });

  it("call get request with wrong params", async () => {
    const error = new Error("Async error")
    Maxihost._delete = jest.fn().mockRejectedValue(error);
    await maxihostApi.Device.delete(deviceId).catch(
      e => { expect(e).toBe(error) }
    );
  })
})
