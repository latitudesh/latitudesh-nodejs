import LatitudeSh from '../../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token', 'some-test.origin');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',

  Origin: 'some-test.origin',
};
const projectId = 12345;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get project members', () => {
  it('call get request to list all project members', async () => {
    const path = `/projects/${projectId}/members`;
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Projects.Members.list(projectId);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers, '');
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Projects.Members.list('wrong').catch(e => {
      expect(e).toBe(error);
    });
  });
});
