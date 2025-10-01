import LatitudeSh from '../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
};
const blockStorageId = 'blk_123456';
const createData = {
  data: {
    type: 'blocks',
    attributes: {
      project: 'proj_abc123',
      name: 'my-block-storage',
      size_in_gb: 1500,
    },
  },
};
const mountData = {
  data: {
    type: 'blocks',
    attributes: {
      nqn: 'nqn.2024-01.com.example:server01',
    },
  },
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('BlockStorage', () => {
  it('should create a block storage', async () => {
    const path = '/storage/blocks';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.BlockStorage.create(createData);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(path, headers, createData);
  });

  it('should list block storages', async () => {
    const path = '/storage/blocks';
    const searchParams = { 'filter[project]': 'proj_abc123' };
    const searchParamsParsed = new URLSearchParams(searchParams).toString();
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.BlockStorage.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      headers,
      searchParamsParsed
    );
  });

  it('should get a specific block storage', async () => {
    const path = `/storage/blocks/${blockStorageId}`;
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.BlockStorage.get(blockStorageId);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers);
  });

  it('should mount a block storage', async () => {
    const path = `/storage/blocks/${blockStorageId}/mount`;
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.BlockStorage.mount(blockStorageId, mountData);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(path, headers, mountData);
  });

  it('should delete a block storage', async () => {
    const path = `/storage/blocks/${blockStorageId}`;
    LatitudeSh._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.BlockStorage.delete(blockStorageId);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(path, headers);
  });
});
