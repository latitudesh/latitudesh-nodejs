import Maxihost from '../../maxihost.js';

const deviceId = 4;
const projectId = 5;
const maxihostApi = new Maxihost('fake token');


beforeEach(() => {
  jest.resetAllMocks();
});

describe('list ips', () => {
  const searchParams = { "page[size]": 1000 };
  const searchParamsParsed = 'page%5Bsize%5D=1000';

  it('call get request with right params', async () => {
    const path = '/ips';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Ips.list(searchParams);
    await expect(Maxihost._get).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Ips.list(searchParams).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('list IPs with server ID filter', () => {
  const searchParams = { "page[size]": 1000, "filter[server]": deviceId };
  const searchParamsParsed = `page%5Bsize%5D=1000&filter%5Bserver%5D=${deviceId}`;

  it('call get request with right params', async () => {
    const path = '/ips';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Ips.list(searchParams);
    await expect(Maxihost._get).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Ips.list(searchParams).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('list IPs with project ID filter', () => {
  const searchParams = { "page[size]": 1000, "filter[project]": projectId };
  const searchParamsParsed = `page%5Bsize%5D=1000&filter%5Bproject%5D=${projectId}`;

  it('call get request with right params', async () => {
    const path = '/ips';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Ips.list(searchParams);
    await expect(Maxihost._get).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Ips.list(searchParams).catch(e => {
      expect(e).toBe(error);
    });
  });
});
