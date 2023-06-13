import LatitudeSh from '../../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
};

const serverId = 12345;
const data = {
  data: {
    type: 'out_of_band',
    attributes: {
      ssh_key_id: 0
    }
  }
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('generate ssh credentials', () => {
  it('call post to create a out of band ssh credentials', async () => {
    const path = `/servers/${serverId}/out_of_band_connection`;
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Server.OutOfBand.create(serverId, data);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(path, headers, data);
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Server.OutOfBand.create(serverId, data).catch(e => {
      expect(e).toBe(error);
    });
  });
});
