import LatitudeSh from '../../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
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
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Traffic.Quota.get(projectSlug);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      headers,
      `${encodeURIComponent('filter[project]')}=${projectSlug}`
    );
  });
});
