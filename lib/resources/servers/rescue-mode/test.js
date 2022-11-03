import Maxihost from '../../../maxihost.js';

const maxihostApi = new Maxihost('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json'
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('rescue mode', () => {
  it('should call enter rescue mode', async () => {
    const serverId = 4321;
    const path = `/servers/${serverId}/rescue_mode`;
    Maxihost._post = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Server.RescueMode.enter(serverId);
    await expect(Maxihost._post).toHaveBeenCalledWith(path, headers);
  });

  it('should call exit rescue mode', async () => {
    const serverId = 4321;
    const path = `/servers/${serverId}/exit_rescue_mode`;
    Maxihost._post = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Server.RescueMode.exit(serverId);
    await expect(Maxihost._post).toHaveBeenCalledWith(path, headers);
  });
});
