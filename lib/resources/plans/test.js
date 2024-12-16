import LatitudeSh from '../../latitudesh.js';
const LatitudeShApi = new LatitudeSh('fake token');

const searchParams = {
  limit: 0,
};
const searchParamsParsed = 'limit=0';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get plans', () => {
  it('call get request with right params', async () => {
    const path = '/plans';
    LatitudeSh._get = jest.fn(() => {
      return {
        body: {
          success: true,
        },
      };
    });
    LatitudeShApi.Plans.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const path = '/plans';
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Plans.list().catch(e => {
      expect(e).toBe(error);
    });
  });
  it('call get request for a single plan', async () => {
    const path = '/plans/test-plan-id';
    LatitudeSh._get = jest.fn(() => {
      return {
        body: {
          success: true,
        },
      };
    });
    LatitudeShApi.Plans.get('test-plan-id', searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });
});

describe('get addons', () => {
  it('call get request with right params', async () => {
    const path = '/plans/addons';
    LatitudeSh._get = jest.fn(() => {
      return {
        body: {
          success: true,
        },
      };
    });
    LatitudeShApi.Plans.addons(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const path = '/plans/addons';
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Plans.addons().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('get operating systems', () => {
  it('call get request with right params', async () => {
    const path = '/plans/operating_systems';
    LatitudeSh._get = jest.fn(() => {
      return {
        body: {
          success: true,
        },
      };
    });
    LatitudeShApi.Plans.operatingSystems(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const path = '/plans/operating_systems';
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Plans.addons().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('get storages', () => {
  it('call get request with right params', async () => {
    const path = '/plans/storage';
    LatitudeSh._get = jest.fn(() => {
      return {
        body: {
          success: true,
        },
      };
    });
    LatitudeShApi.Plans.storages(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const path = '/plans/storage';
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Plans.storages().catch(e => {
      expect(e).toBe(error);
    });
  });
});
