import Maxihost from '../../../maxihost.js';

const deviceId = 4;
const data = {
  id: 4,
  label: 'hostname',
  operating_system: 'centos',
};
const maxihostApi = new Maxihost('fake token');
const searchParams = { id: 4, type: 'on' };
const searchParamsParsed = 'id=4&type=on';

describe('manage power', () => {
  it('call put request with right params', async () => {
    const path = '/servers/' + deviceId + '/actions';
    Maxihost._put = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Server.Actions.managePower(deviceId, data);
    await expect(Maxihost._put).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      data
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._post = jest.fn().mockRejectedValue(error);
    await maxihostApi.Server.Actions.reinstall(deviceId, data).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('get remote access', () => {
  it('call get request with right params', async () => {
    const path = '/servers/' + deviceId + '/remote_access';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    await maxihostApi.Server.Actions.getRemoteAccess(deviceId);
    expect(Maxihost._get).toHaveBeenCalledWith(path, Maxihost._headers);
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Server.Actions.getRemoteAccess(deviceId).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('get reinstall', () => {
  it('call get request with right params', async () => {
    const path = '/servers/' + deviceId + '/reinstall';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    await maxihostApi.Server.Actions.getReinstall(deviceId);
    expect(Maxihost._get).toHaveBeenCalledWith(path, Maxihost._headers);
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Server.Actions.getReinstall(deviceId).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('schedule reinstall', () => {
  it('call post request with right params', async () => {
    const path = '/servers/' + deviceId + '/reinstall';
    Maxihost._post = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Server.Actions.reinstall(deviceId, data);
    await expect(Maxihost._post).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      data
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._post = jest.fn().mockRejectedValue(error);
    await maxihostApi.Server.Actions.reinstall(deviceId, data).catch(e => {
      expect(e).toBe(error);
    });
  });
});
