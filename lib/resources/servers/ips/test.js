import LatitudeSh from '../../../latitudesh.js';

const deviceId = 4;
const LatitudeShApi = new LatitudeSh('fake token');

const searchParams = { limit: 0 };
const searchParamsParsed = 'limit=0';

beforeEach(() => {
  jest.resetAllMocks();
});
describe('list ips', () => {
  it('call get request with right params', async () => {
    const path = '/servers/' + deviceId + '/ips';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Server.Ips.list(deviceId, searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Server.Ips.list(deviceId, searchParams).catch(e => {
      expect(e).toBe(error);
    });
  });
});
