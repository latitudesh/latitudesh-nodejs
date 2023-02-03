import LatitudeSh from '../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
};
const data = {
  data: {
    type: 'api_version',
    attributes: {
      new_version: '2022-07-18',
    },
  },
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('api version', () => {
  it('call get request to get api version', async () => {
    const path = '/auth/current_version';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.ApiVersion.get();
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers);
  });

  it('call patch request to update api version', async () => {
    const path = '/auth/update_version';
    LatitudeSh._patch = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.ApiVersion.update(data);
    await expect(LatitudeSh._patch).toHaveBeenCalledWith(path, headers, data);
  });
});
