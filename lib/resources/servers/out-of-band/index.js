class OutOfBand {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  create(serverId, bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(
      '/servers/' + serverId + '/out_of_band_connection',
      headers,
      bodyData
    );
  }
}

module.exports = OutOfBand;
