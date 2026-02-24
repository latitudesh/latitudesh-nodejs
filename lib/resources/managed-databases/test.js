import LatitudeSh from '../../latitudesh.js';

const databaseId = 'db_abc123';
const LatitudeShApi = new LatitudeSh('fake token');

const data = {
  data: {
    type: 'managed_databases',
    attributes: {
      name: 'my-analytics-db',
      project_id: 'qa-5906',
      region: 'dev-ashburn',
      plan: 'db.clickhouse.dev',
      engine: 'clickhouse',
    },
  },
};

const searchParams = { project_id: 'qa-5906' };
const searchParamsParsed = 'project_id=qa-5906';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get managed database', () => {
  it('call get request with right params', async () => {
    const path = '/managed_databases/' + databaseId;
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.ManagedDatabases.get(databaseId, searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.ManagedDatabases.get(databaseId).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('list managed databases', () => {
  it('call get request with right params', async () => {
    const path = '/managed_databases';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.ManagedDatabases.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.ManagedDatabases.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('list managed databases with engine filter', () => {
  const searchParams = { project_id: 'qa-5906', engine: 'clickhouse' };
  const searchParamsParsed = 'project_id=qa-5906&engine=clickhouse';

  it('call get request with right params', async () => {
    const path = '/managed_databases';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.ManagedDatabases.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });
});

describe('create managed database', () => {
  it('call post request with right params', async () => {
    const path = '/managed_databases';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.ManagedDatabases.create(data);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call post request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.ManagedDatabases.create(data).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('delete managed database', () => {
  it('call delete request with right params', async () => {
    const path = '/managed_databases/' + databaseId;
    LatitudeSh._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.ManagedDatabases.delete(databaseId);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });

  it('call delete request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._delete = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.ManagedDatabases.delete(databaseId).catch(e => {
      expect(e).toBe(error);
    });
  });
});
