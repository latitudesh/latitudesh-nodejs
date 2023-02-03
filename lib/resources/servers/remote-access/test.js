import LatitudeSh from '../../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('generate ipmi credentials', () => {
  it('call post to create a ipmi session', async () => {
    const serverId = 4321;
    const path = `/servers/${serverId}/remote_access`;
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Server.RemoteAccess.create(serverId);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(path, headers);
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Server.RemoteAccess.create('wrong').catch(e => {
      expect(e).toBe(error);
    });
  });
});
