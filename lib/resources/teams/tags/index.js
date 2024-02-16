class Tags {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/tags';
  }

  list() {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(this.baseUrl, headers);
  }

  create(bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(this.baseUrl, headers, bodyData);
  }

  delete(tagId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._delete(`${this.baseUrl}/${tagId}`, headers);
  }
}

module.exports = Tags;
