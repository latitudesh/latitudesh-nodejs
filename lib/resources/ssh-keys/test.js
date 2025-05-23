import LatitudeSh from '../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
};
const data = {
  data: {
    type: 'ssh_keys',
    attributes: {
      name: 'MBP Key',
      public_key: 'very big key',
    },
  },
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get  ssh keys', () => {
  it('call get request to list all ssh keys', async () => {
    const path = `/ssh_keys`;
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.SshKeys.list();
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers, '');
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.SshKeys.list('wrong').catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('get  specific key', () => {
  it('call get request to list details of ssh key', async () => {
    const sshKeyId = 4321;
    const path = `/ssh_keys/${sshKeyId}`;
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.SshKeys.get(sshKeyId);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers, '');
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.SshKeys.get('wrong', 'wrong').catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('create ssh key', () => {
  it('call post request with right params', async () => {
    const path = `/ssh_keys`;
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.SshKeys.create(data);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call post request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.SshKeys.create({}).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('update ssh key', () => {
  it('call patch request with right params', async () => {
    const sshKeyId = 1;
    const path = `/ssh_keys/${sshKeyId}`;
    LatitudeSh._patch = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.SshKeys.update(sshKeyId, data);
    await expect(LatitudeSh._patch).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call patch request with wrong params', async () => {
    const error = new Error('Async error');
    const sshKeyId = 1;
    LatitudeSh._patch = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.SshKeys.update(sshKeyId, {}).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('delete ssh key', () => {
  it('call delete request with right params', async () => {
    const sshKeyId = 1;
    const path = `/ssh_keys/${sshKeyId}`;
    LatitudeSh._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.SshKeys.delete(sshKeyId);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });

  it('call delete request with wrong params', async () => {
    const error = new Error('Async error');
    const sshKeyId = 1;
    LatitudeSh._delete = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.SshKeys.delete(sshKeyId, {}).catch(e => {
      expect(e).toBe(error);
    });
  });
});
