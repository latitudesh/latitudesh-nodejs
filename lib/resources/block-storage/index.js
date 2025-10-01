class BlockStorage {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  create(bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post('/storage/blocks', headers, bodyData);
  }

  list(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get('/storage/blocks', headers, searchParams);
  }

  get(blockStorageId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(
      `/storage/blocks/${blockStorageId}`,
      headers
    );
  }

  mount(blockStorageId, bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(
      `/storage/blocks/${blockStorageId}/mount`,
      headers,
      bodyData
    );
  }

  delete(blockStorageId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._delete(
      `/storage/blocks/${blockStorageId}`,
      headers
    );
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.BlockStorage = new BlockStorage(LatitudeSh);
};
