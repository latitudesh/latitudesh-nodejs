class Firewall {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  get(firewallId, searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(
      '/firewalls/' + firewallId,
      this.LatitudeSh._headers,
      searchParams
    );
  }

  list(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(
      '/firewalls',
      this.LatitudeSh._headers,
      searchParams
    );
  }

  create(bodyData) {
    return this.LatitudeSh._post(
      '/firewalls',
      this.LatitudeSh._headers,
      bodyData
    );
  }

  update(firewallId, bodyData) {
    return this.LatitudeSh._patch(
      `/firewalls/${firewallId}`,
      this.LatitudeSh._headers,
      bodyData
    );
  }

  getAssignments(firewallId) {
    return this.LatitudeSh._get(
      `/firewalls/${firewallId}/assignments`,
      this.LatitudeSh._headers
    );
  }

  assign(firewallId, bodyData) {
    return this.LatitudeSh._post(
      `/firewalls/${firewallId}/assignments`,
      this.LatitudeSh._headers,
      bodyData
    );
  }

  unassign(firewallId, assignmentId) {
    return this.LatitudeSh._delete(
      `/firewalls/${firewallId}/assignments/${assignmentId}`,
      this.LatitudeSh._headers
    );
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.Firewall = new Firewall(LatitudeSh);
};
