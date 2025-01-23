class VirtualMachines {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  get(virtualMachineId, searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(
      '/virtual_machines/' + virtualMachineId,
      this.LatitudeSh._headers,
      searchParams
    );
  }

  list(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(
      '/virtual_machines',
      this.LatitudeSh._headers,
      searchParams
    );
  }

  create(bodyData) {
    return this.LatitudeSh._post(
      '/virtual_machines',
      this.LatitudeSh._headers,
      bodyData
    );
  }

  delete(virtualMachineId) {
    return this.LatitudeSh._delete(
      `/virtual_machines/${virtualMachineId}`,
      this.LatitudeSh._headers
    );
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.VirtualMachines = new VirtualMachines(LatitudeSh);
};
