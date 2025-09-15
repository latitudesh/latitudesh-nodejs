class Actions {
    constructor(LatitudeSh) {
      this.LatitudeSh = LatitudeSh;
    }
  
    managePower(virtualMachineId, postData) {
      const headers = this.LatitudeSh._headers;
      return this.LatitudeSh._post(
        '/virtual_machines/' + virtualMachineId + '/actions',
        headers,
        postData
      );
    }
 
  }
  
  module.exports = Actions;
  