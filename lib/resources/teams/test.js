import LatitudeSh from '../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json',
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get current team', () => {
  it('call get request to list current team', async () => {
    const path = '/team';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Teams.current();
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers, '');
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.Teams.current().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('update team', () => {
  it('call patch request with right params', async () => {
    const teamId = 1;
    const path = `/team/${teamId}`;
    const data = {
      data: {
        id: teamId,
        type: 'teams',
        attributes: {
          name: 'Kozey LLC',
          description: 'Implemented upward-trending superstructure',
          address: '6822 Clara Creek',
        },
      },
    };
    LatitudeSh._patch = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Teams.update(teamId, data);
    await expect(LatitudeSh._patch).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });
});
