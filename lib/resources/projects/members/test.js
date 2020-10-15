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

describe('get project members', () => {
  it('call get request to list all project members', async () => {
    const path = `/projects/${projectId}/members`;
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Projects.Members.list(projectId);
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers);
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Projects.Members.list('wrong').catch(e => {
      expect(e).toBe(error);
    });
  });
});
