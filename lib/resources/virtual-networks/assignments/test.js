import LatitudeSh from '../../../latitudesh.js';
const LatitudeShApi = new LatitudeSh('fake token');

const vid = 44;
const id = 1;
const data = {
  device_id: '4',
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('list assignments', () => {
  it('call get request with right params', async () => {
    const path = '/virtual_networks/assignments';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.VirtualNetworks.Assignments.list({ vid: 44 });
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      'vid=44'
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.VirtualNetworks.Assignments.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('create assignments', () => {
  it('call post request with right params', async () => {
    const path = '/virtual_networks/assignments';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.VirtualNetworks.Assignments.create({
      server_id: 1,
      vid: 2,
    });
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      {
        server_id: 1,
        vid: 2,
      }
    );
  });

  it('call posts request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.VirtualNetworks.Assignments.create(vid, data).catch(
      e => {
        expect(e).toBe(error);
      }
    );
  });
});

describe('delete assignments', () => {
  it('call delete request with right params', async () => {
    const path = '/virtual_networks/assignments/' + id;
    LatitudeSh._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.VirtualNetworks.Assignments.delete(id);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });

  it('call delete request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._delete = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.VirtualNetworks.Assignments.delete(vid, id).catch(e => {
      expect(e).toBe(error);
    });
  });
});
