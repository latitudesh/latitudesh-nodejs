import LatitudeSh from '../../latitudesh.js';

const virtualMachineId = 4;
const LatitudeShApi = new LatitudeSh('fake token');

const data = {
  region: 'mh1',
  plan: 'vm-small',
  hostname: 'test',
  operating_system: 'ubuntu_22_04_x64',
};

const searchParams = { limit: 0 };
const searchParamsParsed = 'limit=0';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get virtual machine', () => {
  it('call get request with right params', async () => {
    const path = '/virtual_machines/' + virtualMachineId;
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.VirtualMachines.get(virtualMachineId, searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.VirtualMachines.get(virtualMachineId).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('list virtual machines', () => {
  it('call get request with right params', async () => {
    const path = '/virtual_machines';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.VirtualMachines.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.VirtualMachines.list().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('list virtual machines with project ID filter', () => {
  const searchParams = {
    'page[size]': 1000,
    'filter[project]': '1',
  };
  const searchParamsParsed = 'page%5Bsize%5D=1000&filter%5Bproject%5D=1';

  it('call get request with right params', async () => {
    const path = '/virtual_machines';
    LatitudeSh._get = jest.fn(() => {
      return {
        body: {
          success: true,
        },
      };
    });
    LatitudeShApi.VirtualMachines.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      searchParamsParsed
    );
  });
});

describe('create virtual machine', () => {
  it('call post request with right params', async () => {
    const path = '/virtual_machines';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.VirtualMachines.create(data);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call post request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.VirtualMachines.create(data).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('update virtual machine', () => {
  it('call patch request with right params', async () => {
    const path = '/virtual_machines/' + virtualMachineId;
    LatitudeSh._patch = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.VirtualMachines.update(virtualMachineId, data);
    await expect(LatitudeSh._patch).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call patch request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._patch = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.VirtualMachines.update(virtualMachineId, data).catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('delete virtual machine', () => {
  it('call delete request with right params', async () => {
    const path = '/virtual_machines/' + virtualMachineId;
    LatitudeSh._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.VirtualMachines.delete(virtualMachineId);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers
    );
  });

  it('call delete request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._delete = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.VirtualMachines.delete(virtualMachineId).catch(e => {
      expect(e).toBe(error);
    });
  });
});
