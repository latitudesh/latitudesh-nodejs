class ManagedDatabases {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  get(databaseId, searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(
      '/managed_databases/' + databaseId,
      this.LatitudeSh._headers,
      searchParams
    );
  }

  list(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(
      '/managed_databases',
      this.LatitudeSh._headers,
      searchParams
    );
  }

  create(bodyData) {
    return this.LatitudeSh._post(
      '/managed_databases',
      this.LatitudeSh._headers,
      bodyData
    );
  }

  delete(databaseId) {
    return this.LatitudeSh._delete(
      '/managed_databases/' + databaseId,
      this.LatitudeSh._headers
    );
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.ManagedDatabases = new ManagedDatabases(LatitudeSh);
};
