class Storage {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  create(bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post('/storage/filesystems', headers, bodyData);
  }

  list(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get('/storage/filesystems', headers, searchParams);
  }

  update(bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._patch(
      `/storage/filesystems/${fileSystemId}`,
      headers,
      bodyData
    );
  }

  delete(fileSystemId, queryParams = '') {
    queryParams = new URLSearchParams(queryParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._delete(
      `/storage/filesystems/${fileSystemId}`,
      headers,
      queryParams
    );
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.Storage = new Storage(LatitudeSh);
};
