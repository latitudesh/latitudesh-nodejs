import LatitudeSh from '../../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json',
};
const data = {
  data: {
    type: 'api_keys',
    attributes: {
      name: 'My API Key',
    },
  },
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('list roles', () => {
  it('call get request to list all roles', async () => {
    const path = '/roles';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Teams.Roles.list();
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers);
  });
});

describe('get role by id', () => {
  it('call get request to get role by id', async () => {
    const path = '/roles/test-id';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Teams.Roles.get('test-id');
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers);
  });
});
