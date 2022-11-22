import LatitudeSh from '../../../latitudesh.js';

const scriptId = 4;
const LatitudeShApi = new LatitudeSh('fake token');

const data = {
  facility: 'mh1',
  plan: 'type_1',
  hostname: 'test',
  operating_system: 'ubuntu_19_10_x64',
  billing_cycle: 'monthly',
};

const projectSlug = 'test-project';

const searchParams = { limit: 0 };
const searchParamsParsed = 'limit=0';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get custom script', () => {
  it('call get request with right params', async () => {
    const path = `/projects/test-project/user_data/4`;
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Projects.UserData.get(projectSlug, scriptId);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      ''
    );
  });

  it('call get request with wrong params', async () => {
    const path = '/projects/user_data/' + scriptId;
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Projects.UserData.get(projectSlug, scriptId).catch(
      e => {
        expect(e).toBe(error);
      }
    );
  });
});

describe('list custom script', () => {
  it('call get request with right params', async () => {
    const path = `/projects/test-project/user_data`;
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Projects.UserData.list(projectSlug, searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Projects.UserData.list(projectSlug).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('create custom script', () => {
  it('call post request with right params', async () => {
    const path = '/projects/test-project/user_data';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Projects.UserData.create(projectSlug, data);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call posts request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Projects.UserData.create(projectSlug, data).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('delete custom script', () => {
  it('call delete request with right params', async () => {
    const path = '/projects/test-project/user_data/' + scriptId;
    LatitudeSh._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Projects.UserData.delete(projectSlug, scriptId);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });

  it('call delete request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._delete = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Projects.UserData.delete(projectSlug, scriptId).catch(
      e => {
        expect(e).toBe(error);
      }
    );
  });
});
