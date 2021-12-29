import Maxihost from '../../../maxihost.js';

const maxihostApi = new Maxihost('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json',
};
const projectSlug = 'test-project-slug';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get traffic quota', () => {
  it('calls the traffic quota endpoint', async () => {
    const path = `/traffic/quota`;
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Traffic.Quota.get(projectSlug);
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers, `${encodeURIComponent('filter[project]')}=${projectSlug}`);
  });
});
