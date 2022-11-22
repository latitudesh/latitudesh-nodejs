class UserData {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/projects';
  }

  list(projectIdOrSlug, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(
      `${this.baseUrl}/${projectIdOrSlug}/user_data`,
      headers,
      searchParams
    );
  }

  get(projectIdOrSlug, userDataId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(
      `${this.baseUrl}/${projectIdOrSlug}/user_data/${userDataId}`,
      headers,
      searchParams
    );
  }

  update(projectIdOrSlug, userDataId, bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._put(
      `${this.baseUrl}/${projectIdOrSlug}/user_data/${userDataId}`,
      headers,
      bodyData
    );
  }

  create(projectIdOrSlug, bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(
      `${this.baseUrl}/${projectIdOrSlug}/user_data`,
      headers,
      bodyData
    );
  }

  delete(projectIdOrSlug, userDataId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._delete(
      `${this.baseUrl}/${projectIdOrSlug}/user_data/${userDataId}`,
      headers
    );
  }
}

module.exports = UserData;
