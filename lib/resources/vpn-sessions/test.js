import Maxihost from '../../maxihost.js';
const maxihostApi = new Maxihost('fake token');

const searchParams = { region: 'MH1' };
const searchParamsParsed = 'region=MH1';
const vpnSessionId = 12345;

const data = {
  data: {
    attributes: { site: 'chicago', server_id: '7423' },
    type: 'vpn_sessions',
  },
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('list vpns', () => {
  it('call get request with right params', async () => {
    const path = '/vpn_sessions';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.VpnSessions.list(searchParams);
    await expect(Maxihost._get).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.VpnSessions.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('create virtual network', () => {
  it('call post request with right params', async () => {
    const path = '/vpn_sessions';
    Maxihost._post = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.VpnSessions.create(data);
    await expect(Maxihost._post).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      data
    );
  });

  it('call posts request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._post = jest.fn().mockRejectedValue(error);
    await maxihostApi.VpnSessions.create(data).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('refresh virtual network password', () => {
  it('call put request with right params', async () => {
    const path = '/vpn_sessions/' + vpnSessionId + '/refresh_password';
    Maxihost._put = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.VpnSessions.refreshPassword(vpnSessionId);
    await expect(Maxihost._put).toHaveBeenCalledWith(path, Maxihost._headers);
  });

  it('call put request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._put = jest.fn().mockRejectedValue(error);
    await maxihostApi.VpnSessions.refreshPassword(vpnSessionId).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('delete virtual network', () => {
  it('call delete request with right params', async () => {
    const path = '/vpn_sessions/' + vpnSessionId;
    Maxihost._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.VpnSessions.delete(vpnSessionId);
    await expect(Maxihost._delete).toHaveBeenCalledWith(
      path,
      Maxihost._headers
    );
  });

  it('call delete request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._delete = jest.fn().mockRejectedValue(error);
    await maxihostApi.VpnSessions.delete(vpnSessionId).catch(e => {
      expect(e).toBe(error);
    });
  });
});
