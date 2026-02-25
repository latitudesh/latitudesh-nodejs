class ElasticIps {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/elastic_ips';
  }

  list(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(
      this.baseUrl,
      this.LatitudeSh._headers,
      searchParams
    );
  }

  get(id) {
    return this.LatitudeSh._get(
      `${this.baseUrl}/${id}`,
      this.LatitudeSh._headers
    );
  }

  create(bodyData) {
    return this.LatitudeSh._post(
      this.baseUrl,
      this.LatitudeSh._headers,
      bodyData
    );
  }

  update(id, bodyData) {
    console.log(' >>>>>>> id', id);
    console.log(' >>>>>>> bodyData', bodyData);
    return this.LatitudeSh._patch(
      `${this.baseUrl}/${id}`,
      this.LatitudeSh._headers,
      bodyData
    );
  }

  delete(id) {
    return this.LatitudeSh._delete(
      `${this.baseUrl}/${id}`,
      this.LatitudeSh._headers
    );
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.ElasticIps = new ElasticIps(LatitudeSh);
};
