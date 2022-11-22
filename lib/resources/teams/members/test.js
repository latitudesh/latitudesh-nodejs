import LatitudeSh from '../../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json',
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get team members', () => {
  it('call get request to list team members', async () => {
    const path = '/team/members';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Teams.Members.list();
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers, '');
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Teams.Members.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});
