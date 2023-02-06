import LatitudeSh from '../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
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
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Projects.list();
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers, '');
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Projects.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('get project by id', () => {
  it('call get request to list specific project', async () => {
    const path = '/projects/1';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Projects.get(1);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers, '');
  });
});
describe('update project', () => {
  it('call patch request with right params', async () => {
    const projectId = 1;
    const path = `/projects/${projectId}`;
    LatitudeSh._patch = jest.fn(() => {
      return {
        body: {
          success: true,
        },
      };
    });
    LatitudeShApi.Projects.update(projectId, data);
    await expect(LatitudeSh._patch).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });
});
describe('delete project', () => {
  it('call delete request correctly', async () => {
    const projectId = 1;
    const path = `/projects/${projectId}`;
    LatitudeSh._delete = jest.fn(() => {
      return {
        body: {
          success: true,
        },
      };
    });
    LatitudeShApi.Projects.delete(projectId);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });
});
