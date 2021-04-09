import Maxihost from '../../../maxihost.js';

const maxihostApi = new Maxihost('fake token');
const serverId = 12345;
const data = {
  data: {
    type: 'deploy_config',
    attributes: {
        hostname: 'some-host',
        ssh_keys: [1, 2, 3],
        raid: 0,
        operating_system: 'trusty',
        description: 'some-description'
      }
  }
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get deploy config', () => {
  it('call get request', async () => {
    const path = `/servers/${serverId}/deploy_config`;
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Server.DeployConfig.get(serverId);
    await expect(Maxihost._get).toHaveBeenCalledWith(path, Maxihost._headers);
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Server.DeployConfig.get('wrong', 'wrong').catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('update deploy config', () => {
  it('call patch request with right params', async () => {
    const path = `/servers/${serverId}/deploy_config`;
    Maxihost._patch = jest.fn(() => {
      return { body: { success: true } };
    });
    maxihostApi.Server.DeployConfig.update(serverId, data);
    await expect(Maxihost._patch).toHaveBeenCalledWith(
      path,
      Maxihost._headers,
      data
    );
  });

  it('call patch request with wrong params', async () => {
    const error = new Error('Async error');
    Maxihost._patch = jest.fn().mockRejectedValue(error);
    await maxihostApi.Server.DeployConfig.update(serverId, data).catch(e => {
      expect(e).toBe(error);
    });
  });
});