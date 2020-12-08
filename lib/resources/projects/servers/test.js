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

describe('get project servers', () => {
  it('call get request to list all project servers', async () => {
    const path = `/projects/${projectId}/servers`;
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Projects.Servers.list(projectId);
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers, '');
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Projects.Servers.list('wrong').catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('get project server', () => {
  it('call get request to list details of a server', async () => {
    const serverId = 4321;
    const path = `/projects/${projectId}/servers/${serverId}`;
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Projects.Servers.get(projectId, serverId);
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

describe('create ipmi session', () => {
  it('call post to create a ipmi session', async () => {
    const serverId = 4321;
    const path = `/projects/${projectId}/servers/${serverId}/remote_access`;
    Maxihost._post = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Projects.Servers.createIpmiSession(projectId, serverId);
    await expect(Maxihost._post).toHaveBeenCalledWith(path, headers);
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._post = jest.fn().mockRejectedValue(error);
    await maxihostApi.Projects.Servers.createIpmiSession(
      'wrong',
      'wrong'
    ).catch(e => {
      expect(e).toBe(error);
    });
  });
});
