import Maxihost from '../../maxihost.js';

const maxihostApi = new Maxihost('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json'
};

const data = {
  name: 'Project Name',
  description: 'Lorem ipsum',
  environment: 'staging',
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('list projects', () => {
  it('call get request to list all projects', async () => {
    const path = '/projects';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Projects.list();
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers, "");
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Projects.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('get project by id', () => {
  it('call get request to list specific project', async () => {
    const path = '/projects/1';
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Projects.get(1);
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers, "");
  });
});
describe('update project', () => {
  it('call patch request with right params', async () => {
    const projectId = 1;
    const path = `/projects/${projectId}`;
    Maxihost._patch = jest.fn(() => {
      return {
        body: {
          success: true
        }
      };
    });
    maxihostApi.Projects.update(projectId, data);
    await expect(Maxihost._patch).toHaveBeenCalledWith(path, Maxihost._headers, data);
  });
});