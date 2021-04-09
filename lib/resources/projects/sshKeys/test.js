import Maxihost from '../../../maxihost.js';

const maxihostApi = new Maxihost('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json',
};
const projectId = 12345;
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
    const path = `/projects/${projectId}/ssh_keys`;
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Projects.SshKeys.list(projectId);
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers, '');
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Projects.SshKeys.list('wrong').catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('get project specific key', () => {
  it('call get request to list details of ssh key', async () => {
    const sshKeyId = 4321;
    const path = `/projects/${projectId}/ssh_keys/${sshKeyId}`;
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Projects.SshKeys.get(projectId, sshKeyId);
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers, '');
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Projects.SshKeys.get('wrong', 'wrong').catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('create ssh key', () => {
  it('call post request with right params', async () => {
    const path = `/projects/${projectId}/ssh_keys`;
    Maxihost._post = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Projects.SshKeys.create(projectId, data);
    await expect(Maxihost._post).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      data
    );
  });

  it('call post request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._post = jest.fn().mockRejectedValue(error);
    await maxihostApi.Projects.SshKeys.create(projectId, {}).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('update ssh key', () => {
  it('call patch request with right params', async () => {
    const sshKeyId = 1;
    const path = `/projects/${projectId}/ssh_keys/${sshKeyId}`;
    Maxihost._patch = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Projects.SshKeys.update(projectId, sshKeyId, data);
    await expect(Maxihost._patch).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      data
    );
  });

  it('call patch request with wrong params', async () => {
    const error = new Error('Async error');
    const sshKeyId = 1;
    Maxihost._patch = jest.fn().mockRejectedValue(error);
    await maxihostApi.Projects.SshKeys.update(projectId, sshKeyId, {}).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('delete ssh key', () => {
  it('call delete request with right params', async () => {
    const sshKeyId = 1;
    const path = `/projects/${projectId}/ssh_keys/${sshKeyId}`;
    Maxihost._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Projects.SshKeys.delete(projectId, sshKeyId);
    await expect(Maxihost._delete).toHaveBeenCalledWith(
      path,
      Maxihost._headers
    );
  });

  it('call delete request with wrong params', async () => {
    const error = new Error('Async error');
    const sshKeyId = 1;
    Maxihost._delete = jest.fn().mockRejectedValue(error);
    await maxihostApi.Projects.SshKeys.delete(sshKeyId, {}).catch(e => {
      expect(e).toBe(error);
    });
  });
});
