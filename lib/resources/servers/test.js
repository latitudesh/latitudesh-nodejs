import Maxihost from '../../maxihost.js';

const deviceId = 4;
const maxihostApi = new Maxihost('fake token');

const data = {
  facility: 'mh1',
  plan: 'type_1',
  hostname: 'test',
  operating_system: 'ubuntu_19_10_x64',
  billing_cycle: 'monthly',
};

const searchParams = { limit: 0 };
const searchParamsParsed = 'limit=0';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get server', () => {
  it('call get request with right params', async () => {
    const path = '/servers/' + deviceId;
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Server.get(deviceId, searchParams);
    await expect(Maxihost._get).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const path = '/servers/' + deviceId;
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Server.get(deviceId).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('list servers', () => {
  it('call get request with right params', async () => {
    const path = '/servers';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Server.list(searchParams);
    await expect(Maxihost._get).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Server.get(deviceId).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('list servers with project ID filter', () => {
  const searchParams = {
    "page[size]": 1000,
    "filter[project]": "1"
  };
  const searchParamsParsed = 'page%5Bsize%5D=1000&filter%5Bproject%5D=1';

  it('call get request with right params', async () => {
    const path = '/servers';
    Maxihost._get = jest.fn(() => {
      return {
        body: {
          success: true
        }
      };
    });
    maxihostApi.Server.list(searchParams);
    await expect(Maxihost._get).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      searchParamsParsed
    );
  });
});

describe('create Server', () => {
  it('call post request with right params', async () => {
    const path = '/servers';
    Maxihost._post = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Server.create(data);
    await expect(Maxihost._post).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      data
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._post = jest.fn().mockRejectedValue(error);
    await maxihostApi.Server.create(data).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('delete Server', () => {
  it('call get request with right params', async () => {
    const path = '/servers/' + deviceId;
    Maxihost._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Server.delete(deviceId);
    await expect(Maxihost._delete).toHaveBeenCalledWith(
      path,
      Maxihost._headers
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._delete = jest.fn().mockRejectedValue(error);
    await maxihostApi.Server.delete(deviceId).catch(e => {
      expect(e).toBe(error);
    });
  });
});
