import Maxihost from "../../../maxihost.js";
const maxihostApi = new Maxihost("fake token");

const searchParams = { device_id: "4" };
const searchParamsParsed = "device_id=4";

const vlan_id = 44;
const id = 1;
const data = {
  device_id: "4",
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe("list assignments", () => {
  it("call get request with right params", async () => {
    const path = "/virtual_networks/" + vlan_id + "/assignments";
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.VirtualNetworks.Assignments.list(vlan_id, searchParams);
    await expect(Maxihost._get).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      searchParamsParsed
    );
  });

  it("call get request with wrong params", async () => {
    const error = new Error("Async error");
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.VirtualNetworks.Assignments.list().catch((e) => {
      expect(e).toBe(error);
    });
  });
});

describe("create assignments", () => {
  it("call post request with right params", async () => {
    const path = "/virtual_networks/" + vlan_id + "/assignments";
    Maxihost._post = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.VirtualNetworks.Assignments.create(vlan_id, data);
    await expect(Maxihost._post).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      data
    );
  });

  it("call posts request with wrong params", async () => {
    const error = new Error("Async error");
    Maxihost._post = jest.fn().mockRejectedValue(error);
    await maxihostApi.VirtualNetworks.Assignments.create(vlan_id, data).catch(
      (e) => {
        expect(e).toBe(error);
      }
    );
  });
});

describe("delete assignments", () => {
  it("call delete request with right params", async () => {
    const path = "/virtual_networks/" + vlan_id + "/assignments/" + id;
    Maxihost._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.VirtualNetworks.Assignments.delete(vlan_id, id);
    await expect(Maxihost._delete).toHaveBeenCalledWith(
      path,
      Maxihost._headers
    );
  });

  it("call delete request with wrong params", async () => {
    const error = new Error("Async error");
    Maxihost._delete = jest.fn().mockRejectedValue(error);
    await maxihostApi.VirtualNetworks.Assignments.delete(vlan_id, id).catch(
      (e) => {
        expect(e).toBe(error);
      }
    );
  });
});
