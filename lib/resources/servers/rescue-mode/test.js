import LatitudeSh from '../../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json',
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('rescue mode', () => {
  it('should call enter rescue mode', async () => {
    const serverId = 4321;
    const path = `/servers/${serverId}/rescue_mode`;
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Server.RescueMode.enter(serverId);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(path, headers);
  });

  it('should call exit rescue mode', async () => {
    const serverId = 4321;
    const path = `/servers/${serverId}/exit_rescue_mode`;
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Server.RescueMode.exit(serverId);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(path, headers);
  });
});
