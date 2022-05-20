class UserData {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/projects';
  }

  list(projectIdOrSlug, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      `${this.baseUrl}/${projectIdOrSlug}/user_data`,
      headers,
      searchParams);
  }

  get(projectIdOrSlug, userDataId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      `${this.baseUrl}/${projectIdOrSlug}/user_data/${userDataId}`,
      headers,
      searchParams
    );
  }

  update(projectIdOrSlug, userDataId, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._put(
      `${this.baseUrl}/${projectIdOrSlug}/user_data/${userDataId}`,
      headers,
      bodyData);
  }

  create(projectIdOrSlug, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(
      `${this.baseUrl}/${projectIdOrSlug}/user_data`,
      headers,
      bodyData);
  }

  delete(projectIdOrSlug, userDataId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._delete(
      `${this.baseUrl}/${projectIdOrSlug}/user_data/${userDataId}`,
      headers
    );
  }
}

module.exports = UserData;
