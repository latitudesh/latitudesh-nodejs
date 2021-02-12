import Maxihost from '../../../maxihost.js';

const projectId = 3;
const serverId = 4;
const data = {
  id: 4,
  label: 'hostname',
  operating_system: 'centos',
};
const maxihostApi = new Maxihost('fake token');
const searchParams = { id: 4, type: 'on' };
const searchParamsParsed = 'id=4&type=on';

describe('manage power', () => {
  it('call post request with right params', async () => {
    const path = '/projects/' + projectId + '/servers/' + serverId + '/actions';
    Maxihost._post = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Server.Actions.managePower(projectId, serverId, data);
    await expect(Maxihost._post).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      data
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._post = jest.fn().mockRejectedValue(error);
    await maxihostApi.Server.Actions.reinstall(serverId, data).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('get remote access', () => {
  it('call get request with right params', async () => {
    const path = '/servers/' + serverId + '/remote_access';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    await maxihostApi.Server.Actions.getRemoteAccess(serverId);
    expect(Maxihost._get).toHaveBeenCalledWith(path, Maxihost._headers);
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Server.Actions.getRemoteAccess(serverId).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('get reinstall', () => {
  it('call get request with right params', async () => {
    const path = '/servers/' + serverId + '/reinstall';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    await maxihostApi.Server.Actions.getReinstall(serverId);
    expect(Maxihost._get).toHaveBeenCalledWith(path, Maxihost._headers);
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Server.Actions.getReinstall(serverId).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('schedule reinstall', () => {
  it('call post request with right params', async () => {
    const path = '/servers/' + serverId + '/reinstall';
    Maxihost._post = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Server.Actions.reinstall(serverId, data);
    await expect(Maxihost._post).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      data
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._post = jest.fn().mockRejectedValue(error);
    await maxihostApi.Server.Actions.reinstall(serverId, data).catch(e => {
      expect(e).toBe(error);
    });
  });
});
