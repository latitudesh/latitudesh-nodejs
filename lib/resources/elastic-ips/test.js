import LatitudeSh from '../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');

const elasticIpId = 'eip_KeQbB4BoO6x10';

const createData = {
  data: {
    type: 'elastic_ips',
    attributes: {
      project_id: 'proj_AoW6vRnwkvLn0',
      server_id: 'sv_2GmAlJ6BXlK1a',
    },
  },
};

const updateData = {
  data: {
    type: 'elastic_ips',
    attributes: {
      server_id: 'sv_oDEBlwBGRO2me',
    },
  },
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('list elastic ips', () => {
  it('call get request with right params', async () => {
    const path = '/elastic_ips';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.ElasticIps.list();
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      ''
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.ElasticIps.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('list elastic ips with project filter', () => {
  const searchParams = { 'filter[project]': 'proj_AoW6vRnwkvLn0' };
  const searchParamsParsed = 'filter%5Bproject%5D=proj_AoW6vRnwkvLn0';

  it('call get request with right params', async () => {
    const path = '/elastic_ips';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.ElasticIps.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });
});

describe('list elastic ips with server filter', () => {
  const searchParams = { 'filter[server]': 'sv_2GmAlJ6BXlK1a' };
  const searchParamsParsed = 'filter%5Bserver%5D=sv_2GmAlJ6BXlK1a';

  it('call get request with right params', async () => {
    const path = '/elastic_ips';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.ElasticIps.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });
});

describe('get elastic ip by id', () => {
  it('call get request with right params', async () => {
    const path = `/elastic_ips/${elasticIpId}`;
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.ElasticIps.get(elasticIpId);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      ''
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.ElasticIps.get(elasticIpId).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('create elastic ip', () => {
  it('call post request with right params', async () => {
    const path = '/elastic_ips';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.ElasticIps.create(createData);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      createData
    );
  });

  it('call post request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.ElasticIps.create(createData).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('update elastic ip', () => {
  it('call patch request with right params', async () => {
    const path = `/elastic_ips/${elasticIpId}`;
    LatitudeSh._patch = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.ElasticIps.update(elasticIpId, updateData);
    await expect(LatitudeSh._patch).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      updateData
    );
  });

  it('call patch request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._patch = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.ElasticIps.update(elasticIpId, updateData).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('delete elastic ip', () => {
  it('call delete request with right params', async () => {
    const path = `/elastic_ips/${elasticIpId}`;
    LatitudeSh._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.ElasticIps.delete(elasticIpId);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });

  it('call delete request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._delete = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.ElasticIps.delete(elasticIpId).catch(e => {
      expect(e).toBe(error);
    });
  });
});
