import Maxihost from "../../maxihost.js";
const maxihostApi = new Maxihost("fake token");

const searchParams = { region: "MH1" };
const searchParamsParsed = "region=MH1";

const virtualNetworkId = 1;

const data = {
  region: "MH1",
  description: "my description",
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe("list virtual networks", () => {
  it("call get request with right params", async () => {
    const path = "/virtual_networks";
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.VirtualNetworks.list(searchParams);
    await expect(Maxihost._get).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      searchParamsParsed
    );
  });

  it("call get request with wrong params", async () => {
    const error = new Error("Async error");
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.VirtualNetworks.list().catch((e) => {
      expect(e).toBe(error);
    });
  });
});

describe("create virtual network", () => {
  it("call post request with right params", async () => {
    const path = "/virtual_networks";
    Maxihost._post = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.VirtualNetworks.create(data);
    await expect(Maxihost._post).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      data
    );
  });

  it("call posts request with wrong params", async () => {
    const error = new Error("Async error");
    Maxihost._post = jest.fn().mockRejectedValue(error);
    await maxihostApi.VirtualNetworks.create(data).catch((e) => {
      expect(e).toBe(error);
    });
  });
});

describe("delete virtual network", () => {
  it("call delete request with right params", async () => {
    const path = "/virtual_networks/" + virtualNetworkId;
    Maxihost._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.VirtualNetworks.delete(virtualNetworkId);
    await expect(Maxihost._delete).toHaveBeenCalledWith(
      path,
      Maxihost._headers
    );
  });

  it("call delete request with wrong params", async () => {
    const error = new Error("Async error");
    Maxihost._delete = jest.fn().mockRejectedValue(error);
    await maxihostApi.VirtualNetworks.delete(virtualNetworkId).catch((e) => {
      expect(e).toBe(error);
    });
  });
});
