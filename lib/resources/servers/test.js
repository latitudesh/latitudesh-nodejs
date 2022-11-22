import LatitudeSh from '../../latitudesh.js';

const deviceId = 4;
const LatitudeShApi = new LatitudeSh('fake token');

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
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Server.get(deviceId, searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const path = '/servers/' + deviceId;
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Server.get(deviceId).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('list servers', () => {
  it('call get request with right params', async () => {
    const path = '/servers';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Server.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Server.get(deviceId).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('list servers with project ID filter', () => {
  const searchParams = {
    'page[size]': 1000,
    'filter[project]': '1',
  };
  const searchParamsParsed = 'page%5Bsize%5D=1000&filter%5Bproject%5D=1';

  it('call get request with right params', async () => {
    const path = '/servers';
    LatitudeSh._get = jest.fn(() => {
      return {
        body: {
          success: true,
        },
      };
    });
    LatitudeShApi.Server.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });
});

describe('create Server', () => {
  it('call post request with right params', async () => {
    const path = '/servers';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Server.create(data);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Server.create(data).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('patch Server', () => {
  it('call patch request with right params', async () => {
    const path = '/servers/' + deviceId;
    LatitudeSh._patch = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Server.update(deviceId, data);
    await expect(LatitudeSh._patch).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._patch = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Server.update(deviceId, data).catch(e => {
      expect(e).toBe(error);
    });
  });
});
describe('delete Server', () => {
  it('call get request with right params', async () => {
    const path = '/servers/' + deviceId;
    LatitudeSh._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Server.delete(deviceId);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._delete = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Server.delete(deviceId).catch(e => {
      expect(e).toBe(error);
    });
  });
});
