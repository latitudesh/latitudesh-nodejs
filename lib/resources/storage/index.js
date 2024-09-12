class Storage {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  create(bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post('/storage/filesystems', headers, bodyData);
  }

  list(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(
      '/storage/filesystems',
      this.LatitudeSh._headers,
      searchParams
    );
  }

  delete(fileSystemId, queryParams = '') {
    queryParams = new URLSearchParams(queryParams).toString();
    return this.LatitudeSh._delete(
      `/storage/filesystems/${fileSystemId}`,
      this.LatitudeSh._headers,
      queryParams
    );
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.Storage = new Storage(LatitudeSh);
};
