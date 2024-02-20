import LatitudeSh from '../../../latitudesh.js';

const LatitudeShApi = new LatitudeSh('fake token');
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('team tags routines', () => {
  it('call get request to list team tags', async () => {
    const path = '/tags';
    LatitudeSh._get = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Teams.Tags.list();
    await expect(LatitudeSh._get).toHaveBeenCalledWith(path, headers);
  });
  it('call post with correct body', async () => {
    const path = '/tags';
    const tagObj = {
      name: 'tagName',
      color: '#fff000',
      description: 'tagDescription',
    };
    LatitudeSh._post = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Teams.Tags.create({
      data: {
        type: 'tags',
        attributes: tagObj,
      },
    });
    await expect(LatitudeSh._post).toHaveBeenCalledWith(path, headers, {
      data: {
        type: 'tags',
        attributes: tagObj,
      },
    });
  });
  it('call patch with correct body', async () => {
    const tagId = 'tag_yN8bR7PDpyfxqkYdjykmS50N5rL';
    const path = `/tags/${tagId}`;
    console.log(path);
    const tagObj = {
      name: 'EditedtagName',
      color: '#fff000',
      description: 'tagDescription',
    };
    LatitudeSh._patch = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Teams.Tags.update(tagId, {
      data: {
        type: 'tags',
        attributes: tagObj,
      },
    });
    await expect(LatitudeSh._patch).toHaveBeenCalledWith(path, headers, {
      data: {
        type: 'tags',
        attributes: tagObj,
      },
    });
  });
  it('call delete with correct param', async () => {
    const tagId = 'tag_yN8bR7PDpyfxqkYdjykmS50N5rL';
    const path = `/tags/${tagId}`;

    LatitudeSh._delete = jest.fn(() => {
      return { body: { success: true } };
    });
    LatitudeShApi.Teams.Tags.delete(tagId);
    await expect(LatitudeSh._delete).toHaveBeenCalledWith(path, headers);
  });
});
