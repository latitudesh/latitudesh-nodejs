import Maxihost from '../../../maxihost.js';

const maxihostApi = new Maxihost('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json',
  Origin: ''
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('generate ipmi credentials', () => {
  it('call post to create a ipmi session', async () => {
    const serverId = 4321;
    const path = `/servers/${serverId}/remote_access`;
    Maxihost._post = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Server.RemoteAccess.create(serverId);
    await expect(Maxihost._post).toHaveBeenCalledWith(path, headers);
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._post = jest.fn().mockRejectedValue(error);
    await maxihostApi.Server.RemoteAccess.create(
      'wrong'
    ).catch(e => {
      expect(e).toBe(error);
    });
  });
});
