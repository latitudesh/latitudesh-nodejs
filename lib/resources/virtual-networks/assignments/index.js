class Assignments {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = "/virtual_networks/";
  }

  list(vlan_id, searchParams = "") {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      `${this.baseUrl}assignments?vlan_id=${vlan_id}`,
      headers,
      searchParams
    );
  }

  create(vlan_id, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(
      this.baseUrl + vlan_id + "/assignments",
      headers,
      bodyData
    );
  }

  delete(vlan_id, id) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._delete(
      this.baseUrl + vlan_id + "/assignments/" + id,
      headers
    );
  }
}

module.exports = Assignments;
