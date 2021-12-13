import Maxihost from '../../../maxihost.js';

const maxihostApi = new Maxihost('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json'
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
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.User.ApiKeys.list();
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers, '');
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.User.ApiKeys.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('create ssh key', () => {
  it('call post request with right params', async () => {
    const path = '/auth/api_keys/';
    Maxihost._post = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.User.ApiKeys.create(data);
    await expect(Maxihost._post).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      data
    );
  });

  it('call post request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._post = jest.fn().mockRejectedValue(error);
    await maxihostApi.User.ApiKeys.create({}).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('update ssh key', () => {
  it('call put request with right params', async () => {
    const keyId = 1;
    const path = `/auth/api_keys/${keyId}`;
    Maxihost._put = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.User.ApiKeys.update(keyId, data);
    await expect(Maxihost._put).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      data
    );
  });

  it('call put request with wrong params', async () => {
    const error = new Error('Async error');
    const keyId = 1;
    Maxihost._put = jest.fn().mockRejectedValue(error);
    await maxihostApi.User.ApiKeys.update(keyId, {}).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('delete ssh key', () => {
  it('call delete request with right params', async () => {
    const keyId = 1;
    const path = `/auth/api_keys/${keyId}`;
    Maxihost._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.User.ApiKeys.delete(keyId);
    await expect(Maxihost._delete).toHaveBeenCalledWith(
      path,
      Maxihost._headers
    );
  });

  it('call delete request with wrong params', async () => {
    const error = new Error('Async error');
    const keyId = 1;
    Maxihost._delete = jest.fn().mockRejectedValue(error);
    await maxihostApi.User.ApiKeys.delete(keyId, {}).catch(e => {
      expect(e).toBe(error);
    });
  });
});
