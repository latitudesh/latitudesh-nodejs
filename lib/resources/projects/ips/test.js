import Maxihost from '../../../maxihost.js';

const maxihostApi = new Maxihost('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json',
};
const projectId = 12345;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get project ips', () => {
  it('call get request to list all project ips', async () => {
    const path = `/projects/${projectId}/ips`;
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Projects.Ips.list(projectId);
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers);
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Projects.Ips.list('wrong').catch(e => {
      expect(e).toBe(error);
    });
  });
});
