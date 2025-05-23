import LatitudeSh from '../../latitudesh.js';

const scriptId = 4;
const LatitudeShApi = new LatitudeSh('fake token');

const data = {
  facility: 'mh1',
  plan: 'type_1',
  hostname: 'test',
  operating_system: 'ubuntu_19_10_x64',
  billing_cycle: 'monthly',
};

const searchParams = { limit: 0 };
const searchParamsParsed = 'limit=0';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get custom script', () => {
  it('call get request with right params', async () => {
    const path = `/user_data/4`;
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.UserData.get(scriptId);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      ''
    );
  });

  it('call get request with wrong params', async () => {
    const path = '/user_data/' + scriptId;
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.UserData.get(scriptId).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('list custom script', () => {
  it('call get request with right params', async () => {
    const path = `/user_data`;
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.UserData.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.UserData.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('create custom script', () => {
  it('call post request with right params', async () => {
    const path = '/user_data';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.UserData.create(data);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call posts request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.UserData.create(data).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('delete custom script', () => {
  it('call delete request with right params', async () => {
    const path = '/user_data/' + scriptId;
    LatitudeSh._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.UserData.delete(scriptId);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });

  it('call delete request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._delete = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.UserData.delete(scriptId).catch(e => {
      expect(e).toBe(error);
    });
  });
});
