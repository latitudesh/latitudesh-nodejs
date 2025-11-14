class BlockStorage {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  create(bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post('/storage/volumes', headers, bodyData);
  }

  list(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get('/storage/volumes', headers, searchParams);
  }

  get(blockStorageId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(`/storage/volumes/${blockStorageId}`, headers);
  }

  mount(blockStorageId, bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(
      `/storage/volumes/${blockStorageId}/mount`,
      headers,
      bodyData
    );
  }

  delete(blockStorageId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._delete(
      `/storage/volumes/${blockStorageId}`,
      headers
    );
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.BlockStorage = new BlockStorage(LatitudeSh);
};
