import Maxihost from '../../../maxihost.js';

const deviceId = 4;
const maxihostApi = new Maxihost('fake token');
const searchParams = { limit: 0 };
const searchParamsParsed = 'limit=0';

describe('get device bandwidth', () => {
  it('call get request with right params', async () => {
    const path = '/servers/' + deviceId + '/bandwidth';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    await maxihostApi.Device.Bandwidth.get(deviceId, searchParams);
    expect(Maxihost._get).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Device.Bandwidth.get(deviceId).catch(e => {
      expect(e).toBe(error);
    });
  });
});
