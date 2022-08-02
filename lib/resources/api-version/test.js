import Maxihost from '../../maxihost.js';

const maxihostApi = new Maxihost('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json'
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
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.ApiVersion.get();
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers);
  });

  it('call patch request to update api version', async () => {
    const path = '/auth/update_version';
    Maxihost._patch = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.ApiVersion.update(data);
    await expect(Maxihost._patch).toHaveBeenCalledWith(path, headers, data);
  });
});
