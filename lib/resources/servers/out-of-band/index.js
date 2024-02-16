class OutOfBand {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  create(serverId, bodyData) {
    return this.LatitudeSh._post(
      '/servers/' + serverId + '/out_of_band_connection',
      this.LatitudeSh._headers,
      bodyData
    );
  }

  get(serverId) {
    return this.LatitudeSh._get(
      '/servers/' + serverId + '/out_of_band_connection',
      this.LatitudeSh._headers
    );
  }
}

module.exports = OutOfBand;
