import Maxihost from '../../../maxihost.js';

const maxihostApi = new Maxihost('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json',
};
const data = {
  data: {
    type: 'ssh_keys',
    attributes: {
      name: 'MBP Key',
      public_key: 'very big key',
    },
  },
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get project ssh keys', () => {
  it('call get request to list all project ssh keys', async () => {
    const path = '/user/ssh_keys/';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.User.SshKeys.list();
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers, '');
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.User.SshKeys.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('create ssh key', () => {
  it('call post request with right params', async () => {
    const path = '/user/ssh_keys/';
    Maxihost._post = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.User.SshKeys.create(data);
    await expect(Maxihost._post).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      data
    );
  });

  it('call post request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._post = jest.fn().mockRejectedValue(error);
    await maxihostApi.User.SshKeys.create({}).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('update ssh key', () => {
  it('call put request with right params', async () => {
    const keyId = 1;
    const path = `user/ssh_keys/${keyId}`;
    Maxihost._put = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.User.SshKeys.update(keyId, data);
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
    await maxihostApi.User.SshKeys.update(keyId, {}).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('delete ssh key', () => {
  it('call delete request with right params', async () => {
    const keyId = 1;
    const path = `user/ssh_keys/${keyId}`;
    Maxihost._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.User.SshKeys.delete(keyId);
    await expect(Maxihost._delete).toHaveBeenCalledWith(
      path,
      Maxihost._headers
    );
  });

  it('call delete request with wrong params', async () => {
    const error = new Error('Async error');
    const keyId = 1;
    Maxihost._delete = jest.fn().mockRejectedValue(error);
    await maxihostApi.User.SshKeys.delete(keyId, {}).catch(e => {
      expect(e).toBe(error);
    });
  });
});
