import Maxihost from '../../../maxihost.js';

const maxihostApi = new Maxihost('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json',
};
const projectId = 12345;

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
    await maxihostApi.Projects.Servers.get('wrong', 'wrong').catch(e => {
      expect(e).toBe(error);
    });
  });
});
