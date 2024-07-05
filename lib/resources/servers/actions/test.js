import LatitudeSh from '../../../latitudesh.js';

const serverId = 4;
const data = {
  id: 4,
  label: 'hostname',
  operating_system: 'centos',
};
const LatitudeShApi = new LatitudeSh('fake token');

describe('manage power', () => {
  it('call post request with right params', async () => {
    const path = '/servers/' + serverId + '/actions';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Server.Actions.managePower(serverId, data);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Server.Actions.reinstall(serverId, data).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('get remote access', () => {
  it('call get request with right params', async () => {
    const path = '/servers/' + serverId + '/remote_access';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    await LatitudeShApi.Server.Actions.getRemoteAccess(serverId);
    expect(LatitudeSh._get).toHaveBeenCalledWith(path, LatitudeSh._headers);
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Server.Actions.getRemoteAccess(serverId).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('get reinstall', () => {
  it('call get request with right params', async () => {
    const path = '/servers/' + serverId + '/reinstall';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    await LatitudeShApi.Server.Actions.getReinstall(serverId);
    expect(LatitudeSh._get).toHaveBeenCalledWith(path, LatitudeSh._headers);
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Server.Actions.getReinstall(serverId).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('lock device', () => {
  it('call post request with right params', async () => {
    const path = '/servers/' + serverId + '/lock';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Server.Actions.lockDevice(serverId);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Server.Actions.lockDevice(serverId).catch(e => {
      expect(e).toBe(error);
    });
  });
})

describe('unlock device', () => {
  it('call post request with right params', async () => {
    const path = '/servers/' + serverId + '/unlock';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Server.Actions.unlockDevice(serverId);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Server.Actions.unlockDevice(serverId).catch(e => {
      expect(e).toBe(error);
    });
  });
})

describe('schedule reinstall', () => {
  it('call post request with right params', async () => {
    const path = '/servers/' + serverId + '/reinstall';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Server.Actions.reinstall(serverId, data);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Server.Actions.reinstall(serverId, data).catch(e => {
      expect(e).toBe(error);
    });
  });
});
