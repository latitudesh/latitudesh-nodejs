class Assignments {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = "/virtual_networks/assignments";
  }

  list(searchParams = "") {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      this.baseUrl,
      headers,
      searchParams
    );
  }

  create(bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(
      this.baseUrl,
      headers,
      bodyData
    );
  }

  delete(id) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._delete(
      `${this.baseUrl}/${id}`,
      headers,
    );
  }
}

module.exports = Assignments;
