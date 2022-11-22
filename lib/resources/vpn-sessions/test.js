import LatitudeSh from '../../latitudesh.js';
const LatitudeShApi = new LatitudeSh('fake token');

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
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.VpnSessions.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.VpnSessions.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('create virtual network', () => {
  it('call post request with right params', async () => {
    const path = '/vpn_sessions';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.VpnSessions.create(data);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call posts request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.VpnSessions.create(data).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('refresh virtual network password', () => {
  it('call put request with right params', async () => {
    const path = '/vpn_sessions/' + vpnSessionId + '/refresh_password';
    LatitudeSh._put = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.VpnSessions.refreshPassword(vpnSessionId);
    await expect(LatitudeSh._put).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });

  it('call put request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._put = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.VpnSessions.refreshPassword(vpnSessionId).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('delete virtual network', () => {
  it('call delete request with right params', async () => {
    const path = '/vpn_sessions/' + vpnSessionId;
    LatitudeSh._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.VpnSessions.delete(vpnSessionId);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });

  it('call delete request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._delete = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.VpnSessions.delete(vpnSessionId).catch(e => {
      expect(e).toBe(error);
    });
  });
});
