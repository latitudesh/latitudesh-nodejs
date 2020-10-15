class Members {
  constructor(Maxihost) {
    this.Maxihost = Maxihost
    this.baseUrl = '/projects'
  }

  list(projectId) {
    const headers = this.Maxihost._headers
    return this.Maxihost._get(`${this.baseUrl}/${projectId}/members`, headers)
  }
}

module.exports = Members
