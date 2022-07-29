class Members {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/projects';
  }

  list(projectIdOrSlug, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString()
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(`${this.baseUrl}/${projectIdOrSlug}/members`, headers, searchParams);
  }
}

module.exports = Members;
