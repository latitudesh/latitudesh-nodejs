class CustomScripts {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = "/devices/custom_scripts/";
  }

  list(searchParams = "") {
    searchParams = new URLSearchParams(searchParams).toString()
    const headers = this.Maxihost._headers
    return this.Maxihost._get(this.baseUrl,
      headers, searchParams
    );
  }

  get(deviceId) {
    const headers = this.Maxihost._headers
    return this.Maxihost._get(this.baseUrl + deviceId,
      headers
    );
  }

  update(deviceId, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._put(this.baseUrl + deviceId,
      headers, bodyData
    );
  }

  create(bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(this.baseUrl,
      headers, bodyData
    );
  }

  delete(deviceId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._delete(this.baseUrl + deviceId,
      headers
    );
  }
}

module.exports = CustomScripts;