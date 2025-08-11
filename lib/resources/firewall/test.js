import LatitudeSh from '../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
};
const firewallId = 67890;
const data = {
  data: {
    type: 'firewall',
    attributes: {
      name: 'Test Firewall',
      rules: [],
    },
  },
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Firewall', () => {
  it('should create a firewall', async () => {
    const path = '/firewalls';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Firewall.create(data);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(path, headers, data);
  });

  it('should list firewalls', async () => {
    const path = '/firewalls';
    const searchParams = { limit: 10 };
    const searchParamsParsed = new URLSearchParams(searchParams).toString();
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Firewall.list(searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      headers,
      searchParamsParsed
    );
  });

  it('should get firewall', async () => {
    const path = `/firewalls/${firewallId}`;
    const searchParams = { detail: true };
    const searchParamsParsed = new URLSearchParams(searchParams).toString();
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Firewall.get(firewallId, searchParams);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(
      path,
      headers,
      searchParamsParsed
    );
  });

  it('should update a firewall', async () => {
    const path = `/firewalls/${firewallId}`;
    LatitudeSh._patch = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Firewall.update(firewallId, data);
    await expect(LatitudeSh._patch).toHaveBeenCalledWith(path, headers, data);
  });

  it('should assign a firewall', async () => {
    const path = `/firewalls/${firewallId}/assignments`;
    const assignData = {
      data: { type: 'assignment', attributes: { target: 'server' } },
    };
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Firewall.assign(firewallId, assignData);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      headers,
      assignData
    );
  });

  it('should get firewall assignments', async () => {
    const path = `/firewalls/${firewallId}/assignments`;
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Firewall.getAssignments(firewallId);
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers);
  });

  it('should unassign a firewall', async () => {
    const assignmentId = 12345;
    const path = `/firewalls/${firewallId}/assignments/${assignmentId}`;
    LatitudeSh._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Firewall.unassign(firewallId, assignmentId);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(path, headers);
  });

  it('should delete a firewall', async () => {
    const path = `/firewalls/${firewallId}`;
    LatitudeSh._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Firewall.delete(firewallId);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(path, headers);
  });
});
