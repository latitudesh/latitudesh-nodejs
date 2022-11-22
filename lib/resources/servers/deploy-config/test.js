import LatitudeSh from '../../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const serverId = 12345;
const data = {
  data: {
    type: 'deploy_config',
    attributes: {
      hostname: 'some-host',
      ssh_keys: [1, 2, 3],
      raid: 0,
      operating_system: 'trusty',
      description: 'some-description',
    },
  },
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get deploy config', () => {
  it('call get request', async () => {
    const path = `/servers/${serverId}/deploy_config`;
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Server.DeployConfig.get(serverId);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Server.DeployConfig.get('wrong', 'wrong').catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('update deploy config', () => {
  it('call patch request with right params', async () => {
    const path = `/servers/${serverId}/deploy_config`;
    LatitudeSh._patch = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Server.DeployConfig.update(serverId, data);
    await expect(LatitudeSh._patch).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call patch request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._patch = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Server.DeployConfig.update(serverId, data).catch(e => {
      expect(e).toBe(error);
    });
  });
});
