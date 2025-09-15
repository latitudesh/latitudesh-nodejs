import LatitudeSh from '../../../latitudesh.js';

const virtualMachineId = 4;
const data = {
  id: 4,
  name: 'hostname',
  operating_system: 'centos',
};
const LatitudeShApi = new LatitudeSh('fake token');

describe('manage power', () => {
  it('call post request with right params', async () => {
    const path = '/virtual_machines/' + virtualMachineId + '/actions';
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.VirtualMachines.Actions.managePower(virtualMachineId, data);
    await expect(LatitudeSh._post).toHaveBeenCalledWith(
      path,
      LatitudeSh._headers,
      data
    );
  });

  it('call post request with wrong params', async () => {
    const error = new Error('Async error');
    LatitudeSh._post = jest.fn().mockRejectedValue(error);
    await LatitudeShApi.VirtualMachines.Actions.managePower(
      virtualMachineId,
      data
    ).catch(e => {
      expect(e).toBe(error);
    });
  });
});
