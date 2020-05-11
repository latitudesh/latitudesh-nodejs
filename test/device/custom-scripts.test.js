import Maxihost from "../../lib/maxihost.js";

const scriptId = 4;
const maxihostApi = new Maxihost("fake token");

const data = {
  "facility": "mh1",
  "plan": "type_1",
  "hostname": "test",
  "operating_system": "ubuntu_19_10_x64",
  "billing_cycle": "monthly"
};

const searchParams = { "limit": 0 };
const searchParamsParsed = "limit=0";

beforeEach(() => {
  jest.resetAllMocks();
})

describe("get custom script", () => {
  it("call get request with right params", async () => {
    const path = "/devices/custom_scripts/" + scriptId;
    Maxihost._get = jest.fn(() => {
      return { "body": { "success": true } };
    });
    maxihostApi.Device.CustomScripts.get(scriptId);
    await expect(Maxihost._get).toHaveBeenCalledWith(path, Maxihost._headers);
  });

  it("call get request with wrong params", async () => {
    const path = "/devices/custom_scripts/" + scriptId;
    const error = new Error("Async error")
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Device.CustomScripts.get(scriptId).catch(
      e => { expect(e).toBe(error) }
    );
  })
})

describe("list custom script", () => {
  it("call get request with right params", async () => {
    const path = "/devices/custom_scripts/";
    Maxihost._get = jest.fn(() => {
      return { "body": { "success": true } }
    });
    maxihostApi.Device.CustomScripts.list(searchParams);
    await expect(Maxihost._get).toHaveBeenCalledWith(path, Maxihost._headers, searchParamsParsed);
  });

  it("call get request with wrong params", async () => {
    const error = new Error("Async error")
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Device.CustomScripts.list().catch(
      e => { expect(e).toBe(error) }
    );
  })
})

describe("create custom script", () => {
  it("call post request with right params", async () => {
    const path = "/devices/custom_scripts/";
    Maxihost._post = jest.fn(() => {
      return { "body": { "success": true } }
    });
    maxihostApi.Device.CustomScripts.create(data);
    await expect(Maxihost._post).toHaveBeenCalledWith(path, Maxihost._headers, data);
  });

  it("call posts request with wrong params", async () => {
    const error = new Error("Async error")
    Maxihost._post = jest.fn().mockRejectedValue(error);
    await maxihostApi.Device.CustomScripts.create(data).catch(
      e => { expect(e).toBe(error) }
    );
  })
})

describe("delete custom script", () => {
  it("call delete request with right params", async () => {
    const path = "/devices/custom_scripts/" + scriptId;
    Maxihost._delete = jest.fn(() => {
      return { "body": { "success": true } }
    });
    maxihostApi.Device.CustomScripts.delete(scriptId);
    await expect(Maxihost._delete).toHaveBeenCalledWith(path, Maxihost._headers);
  });

  it("call delete request with wrong params", async () => {
    const error = new Error("Async error")
    Maxihost._delete = jest.fn().mockRejectedValue(error);
    await maxihostApi.Device.CustomScripts.delete(scriptId).catch(
      e => { expect(e).toBe(error) }
    );
  })
})
