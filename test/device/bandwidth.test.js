const Maxihost = require('../../lib/maxihost.js');

const deviceId = 4;
const maxihostApi = new Maxihost('fake token')

describe('get device bandwidth', () => {

  it('call get request with right params', async () => {
    const path = '/devices/' + deviceId + '/bandwidth';
    Maxihost._get = jest.fn(() => {
      return { "body": { "success": true } }
    });
    await maxihostApi.Device.Bandwidth.get(deviceId)
    expect(Maxihost._get).toHaveBeenCalledWith(path, { headers: Maxihost._headers });
  });

  it('call get request with wrong params', async () => {
    const error = new Error('Async error')
    Maxihost._get = jest.fn().mockRejectedValue(error);
    await maxihostApi.Device.Bandwidth.get(deviceId).catch(
      e => { expect(e).toBe(error) }
    );
  })
})
