import LatitudeSh from '../../../latitudesh.js';
const LatitudeShApi = new LatitudeSh('fake token');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get bandwidth plans', () => {
  it('list bandwidth plans', async () => {
    const path = '/plans/bandwidth';
    LatitudeSh._get = jest.fn(() => {
      return {
        body: {
          success: true,
        },
      };
    });
    LatitudeShApi.Plans.Bandwidth.list();
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });
});

describe('update bandwidth plans', () => {
  it('updates plan', async () => {
    const path = '/plans/bandwidth';
    LatitudeSh._post = jest.fn(() => {
      return {
        body: {
          success: true,
        },
      };
    });
    LatitudeShApi.Plans.Bandwidth.update({});
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      {}
    );
  });
});
