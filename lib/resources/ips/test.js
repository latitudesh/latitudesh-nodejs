import LatitudeSh from '../../latitudesh.js';

const deviceId = 4;
const projectId = 5;
const LatitudeShApi = new LatitudeSh('fake token');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get ip by id', () => {
  it('call get request to get ip by id', async () => {
    const path = '/ips/test-id';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Ips.get('test-id');
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      ''
    );
  });
});

describe('list ips', () => {
  const searchParams = { 'page[size]': 1000 };
  const searchParamsParsed = 'page%5Bsize%5D=1000';

  it('call get request with right params', async () => {
    const path = '/ips';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Ips.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Ips.list(searchParams).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('list IPs with server ID filter', () => {
  const searchParams = { 'page[size]': 1000, 'filter[server]': deviceId };
  const searchParamsParsed = `page%5Bsize%5D=1000&filter%5Bserver%5D=${deviceId}`;

  it('call get request with right params', async () => {
    const path = '/ips';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Ips.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });
});

describe('list IPs with project ID filter', () => {
  const searchParams = { 'page[size]': 1000, 'filter[project]': projectId };
  const searchParamsParsed = `page%5Bsize%5D=1000&filter%5Bproject%5D=${projectId}`;

  it('call get request with right params', async () => {
    const path = '/ips';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Ips.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });
});
