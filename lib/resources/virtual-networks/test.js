import LatitudeSh from '../../latitudesh.js';
const LatitudeShApi = new LatitudeSh('fake token');

const virtualNetworkId = 1;

const data = {
  region: 'MH1',
  description: 'my description',
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('list virtual networks', () => {
  it('call get request with right params', async () => {
    const path = '/virtual_networks';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.VirtualNetworks.list({ 'filter[project]': 'test-project' });
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      'filter%5Bproject%5D=test-project'
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.VirtualNetworks.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('create virtual network', () => {
  it('call post request with right params', async () => {
    const path = '/virtual_networks';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.VirtualNetworks.create(data);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call posts request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.VirtualNetworks.create(data).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('delete virtual network', () => {
  it('call delete request with right params', async () => {
    const path = '/virtual_networks/' + virtualNetworkId;
    LatitudeSh._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.VirtualNetworks.delete(virtualNetworkId);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });

  it('call delete request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._delete = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.VirtualNetworks.delete(virtualNetworkId).catch(e => {
      expect(e).toBe(error);
    });
  });
});
