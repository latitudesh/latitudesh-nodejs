class Assignments {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = "/virtual_networks/";
  }

  list(vlan_id, searchParams = "") {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      this.baseUrl + vlan_id + "/assignments",
      headers,
      searchParams
    );
  }
}

module.exports = Assignments;
