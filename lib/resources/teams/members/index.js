class Members {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/team/members';
  }

  list(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(this.baseUrl, headers, searchParams);
  }

  create(bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(this.baseUrl, headers, bodyData);
  }

  delete(memberId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._delete(`${this.baseUrl}/${memberId}`, headers);
  }
}

module.exports = Members;
