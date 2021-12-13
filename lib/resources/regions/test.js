import Maxihost from '../../maxihost.js';

const maxihostApi = new Maxihost('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json'
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('list regions', () => {
  it('call get request to list all regions', async () => {
    const path = '/regions';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Regions.list();
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers, "");
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Regions.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('get region by id', () => {
  it('call get request to list specific project', async () => {
    const path = '/regions/123';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Regions.get(123);
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers, "");
  });
});
