import Maxihost from '../../../maxihost.js';

const maxihostApi = new Maxihost('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json',
  Origin: ''
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get team members', () => {
  it('call get request to list team members', async () => {
    const path = '/team/members';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Teams.Members.list();
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers, "");
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Teams.Members.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});
