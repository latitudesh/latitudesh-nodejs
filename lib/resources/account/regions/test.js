import LatitudeSh from '../../../latitudesh.js';
const LatitudeShApi = new LatitudeSh('fake token');

const searchParams = { page: '1' };
const searchParamsParsed = 'page=1';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('list regions', () => {
  it('call get request with right params', async () => {
    const path = '/regions/';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Account.Regions.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Account.Regions.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});
