import LatitudeSh from '../../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json',
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('get user profile', () => {
  it('call get request to return user profile', async () => {
    const path = '/user/profile';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.User.Profile.get();
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers, '');
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._get = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.User.Profile.get().catch(e => {
      expect(e).toBe(error);
    });
  });
});

describe('update user profile', () => {
  it('call patch request with right params', async () => {
    const userId = 1;
    const path = `/user/profile/${userId}`;
    const data = {
      data: {
        id: '123123',
        type: 'users',
        attributes: {
          first_name: 'Testing',
        },
      },
    };
    LatitudeSh._patch = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.User.Profile.update(userId, data);
    await expect(LatitudeSh._patch).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });
});
