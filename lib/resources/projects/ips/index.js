class Ips {
  constructor(Maxihost) {
    this.Maxihost = Maxihost
    this.baseUrl = '/projects'
  }

  list(projectId) {
    const headers = this.Maxihost._headers
    return this.Maxihost._get(`${this.baseUrl}/${projectId}/ips`, headers)
  }
}

module.exports = Ips
