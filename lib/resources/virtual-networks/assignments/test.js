import Maxihost from "../../../maxihost.js";
const maxihostApi = new Maxihost("fake token");

const searchParams = { device_id: "4" };
const searchParamsParsed = "device_id=4";

const vlan_id = 44;

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
