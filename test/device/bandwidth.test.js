import Maxihost, { _get, _headers } from '../../lib/maxihost.js';

const deviceId = 4;
const maxihostApi = new Maxihost('fake token')
const searchParams = { "limit": 0 }
const searchParamsParsed = "limit=0"

describe('get device bandwidth', () => {

  it('call get request with right params', async () => {
    const path = '/devices/' + deviceId + '/bandwidth';
    _get = jest.fn(() => {
      return { "body": { "success": true } }
    });
    await maxihostApi.Device.Bandwidth.get(deviceId, searchParams)
    expect(_get).toHaveBeenCalledWith(path, searchParamsParsed, _headers);
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error')
    _get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Device.Bandwidth.get(deviceId).catch(
      e => { expect(e).toBe(error) }
    );
  })
})
