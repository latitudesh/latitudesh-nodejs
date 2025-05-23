class UserData {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  list(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(`/user_data`, headers, searchParams);
  }

  get(userDataId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(
      `/user_data/${userDataId}`,
      headers,
      searchParams
    );
  }

  update(userDataId, bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._put(`/user_data/${userDataId}`, headers, bodyData);
  }

  create(bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(`/user_data`, headers, bodyData);
  }

  delete(userDataId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._delete(`/user_data/${userDataId}`, headers);
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.UserData = new UserData(LatitudeSh);
};
