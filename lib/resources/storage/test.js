import LatitudeSh from '../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
};
const fileSystemId = 12345;
const data = {
  data: {
    type: 'storage',
    attributes: {
      name: 'Test Storage',
      size: 100,
    },
  },
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Storage', () => {
  it('should create a storage filesystem', async () => {
    const path = '/storage/filesystems';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Storage.create(data);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(path, headers, data);
  });

  it('should list storage filesystems', async () => {
    const path = '/storage/filesystems';
    const searchParams = { limit: 10 };
    const searchParamsParsed = new URLSearchParams(searchParams).toString();
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Storage.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      headers,
      searchParamsParsed
    );
  });

  it('should update a storage filesystem', async () => {
    const path = `/storage/filesystems/${fileSystemId}`;
    LatitudeSh._patch = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Storage.update(fileSystemId, data);
    await expect(LatitudeSh._patch).toHaveBeenCalledWith(path, headers, data);
  });

  it('should delete a storage filesystem', async () => {
    const path = `/storage/filesystems/${fileSystemId}`;
    LatitudeSh._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Storage.delete(fileSystemId);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(path, headers, '');
  });
});
