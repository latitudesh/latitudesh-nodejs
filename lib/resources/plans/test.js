import Maxihost from "../../maxihost.js";
const maxihostApi = new Maxihost("fake token");

const searchParams = {
    "limit": 0
};
const searchParamsParsed = "limit=0";

beforeEach(() => {
    jest.resetAllMocks();
})

describe("get plans", () => {
    it("call get request with right params", async () => {
        const path = "/plans";
        Maxihost._get = jest.fn(() => {
            return {
                "body": {
                    "success": true
                }
            };
        });
        maxihostApi.Plans.list(searchParams);
        await expect(Maxihost._get).toHaveBeenCalledWith(path, Maxihost._headers, searchParamsParsed);
    });

    it("call get request with wrong params", async () => {
        const path = "/plans"
        const error = new Error("Async error")
        Maxihost._get = jest.fn().mockRejectedValue(error);
        await maxihostApi.Plans.list().catch(
            e => {
                expect(e).toBe(error)
            }
        );
    })
})

describe("get addons", () => {
    it("call get request with right params", async () => {
        const path = "/plans/addons";
        Maxihost._get = jest.fn(() => {
            return {
                "body": {
                    "success": true
                }
            };
        });
        maxihostApi.Plans.addons(searchParams);
        await expect(Maxihost._get).toHaveBeenCalledWith(path, Maxihost._headers, searchParamsParsed);
    });

    it("call get request with wrong params", async () => {
        const path = "/plans/addons"
        const error = new Error("Async error")
        Maxihost._get = jest.fn().mockRejectedValue(error);
        await maxihostApi.Plans.addons().catch(
            e => {
                expect(e).toBe(error)
            }
        );
    })
})

describe("get operating systems", () => {
    it("call get request with right params", async () => {
        const path = "/plans/operating-systems";
        Maxihost._get = jest.fn(() => {
            return {
                "body": {
                    "success": true
                }
            };
        });
        maxihostApi.Plans.operatingSystems(searchParams);
        await expect(Maxihost._get).toHaveBeenCalledWith(path, Maxihost._headers, searchParamsParsed);
    });

    it("call get request with wrong params", async () => {
        const path = "/plans/operating-systems"
        const error = new Error("Async error")
        Maxihost._get = jest.fn().mockRejectedValue(error);
        await maxihostApi.Plans.addons().catch(
            e => {
                expect(e).toBe(error)
            }
        );
    })
})
