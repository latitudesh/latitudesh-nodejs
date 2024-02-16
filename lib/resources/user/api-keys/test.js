import LatitudeSh from '../../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
};
const data = {
  data: {
    type: 'api_keys',
    attributes: {
      name: 'My API Key',
    },
  },
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get api keys', () => {
  it('call get request to list all api keys', async () => {
    const path = '/auth/api_keys/';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.User.ApiKeys.list();
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers, '');
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.User.ApiKeys.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('create ssh key', () => {
  it('call post request with right params', async () => {
    const path = '/auth/api_keys/';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.User.ApiKeys.create(data);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call post request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.User.ApiKeys.create({}).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('update ssh key', () => {
  it('call put request with right params', async () => {
    const keyId = 1;
    const path = `/auth/api_keys/${keyId}`;
    LatitudeSh._put = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.User.ApiKeys.update(keyId, data);
    await expect(LatitudeSh._put).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call put request with wrong params', async () => {
    const error = new Error('Async error');
    const keyId = 1;
    LatitudeSh._put = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.User.ApiKeys.update(keyId, {}).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('delete ssh key', () => {
  it('call delete request with right params', async () => {
    const keyId = 1;
    const path = `/auth/api_keys/${keyId}`;
    LatitudeSh._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.User.ApiKeys.delete(keyId);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });

  it('call delete request with wrong params', async () => {
    const error = new Error('Async error');
    const keyId = 1;
    LatitudeSh._delete = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.User.ApiKeys.delete(keyId, {}).catch(e => {
      expect(e).toBe(error);
    });
  });
});
