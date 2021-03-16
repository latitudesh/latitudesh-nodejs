class Members {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/team/members';
  }

  list(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString()
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers, searchParams);
  }

  create(bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(this.baseUrl, headers, bodyData);
  }

  delete(memberId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._delete(`${this.baseUrl}/${memberId}`, headers);
  }
}

module.exports = Members;
