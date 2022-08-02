import Maxihost from '../../../maxihost.js';

const maxihostApi = new Maxihost('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json'
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
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Teams.Roles.list();
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers);
  });
});

describe('get role by id', () => {
  it('call get request to get role by id', async () => {
    const path = '/roles/test-id';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Teams.Roles.get('test-id');
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers);
  });
});
