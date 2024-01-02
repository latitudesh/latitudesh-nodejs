import LatitudeSh from '../../../latitudesh.js';

const projectId = 5697;
const LatitudeShApi = new LatitudeSh('fake token');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('list billing usage', () => {
  const filterParams = { 'filter[project]': projectId };
  const filterParamsParsed = `filter%5Bproject%5D=${projectId}`;

  it('call get request with right params', async () => {
    const path = '/billing/usage';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Billing.Usage.list(filterParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      filterParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Billing.Usage.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});
