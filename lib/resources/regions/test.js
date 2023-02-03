import LatitudeSh from '../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('list regions', () => {
  it('call get request to list all regions', async () => {
    const path = '/regions';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Regions.list();
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers, '');
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Regions.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('get region by id', () => {
  it('call get request to list specific project', async () => {
    const path = '/regions/123';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Regions.get(123);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers, '');
  });
});
