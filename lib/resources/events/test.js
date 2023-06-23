import LatitudeSh from '../../latitudesh.js';

const deviceId = 4;
const projectId = 5697;
const LatitudeShApi = new LatitudeSh('fake token');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('list events', () => {
  const searchParams = { 'page[size]': 1000 };
  const searchParamsParsed = 'page%5Bsize%5D=1000';

  it('call get request with right params', async () => {
    const path = '/events';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Events.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Events.list(searchParams).catch(e => {
      expect(e).toBe(error);
    });
  });
});
