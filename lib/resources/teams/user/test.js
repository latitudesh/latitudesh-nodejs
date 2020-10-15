import Maxihost from '../../../maxihost.js'

const maxihostApi = new Maxihost('fake token')
const headers = {
  Authorization: 'Bearer fake token',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.maxihost.v2+json',
}

beforeEach(() => {
  jest.resetAllMocks()
})

describe('get user teams', () => {
  it('call get request to list user teams', async () => {
    const path = '/user/teams'
    Maxihost._get = jest.fn(() => {
      return { body: { success: true } }
    })
    maxihostApi.Teams.User.listTeams()
    await expect(Maxihost._get).toHaveBeenCalledWith(path, headers)
  })

  it('call get request with wrong params', async () => {
    const error = new Error('Async error')
    Maxihost._get = jest.fn().mockRejectedValue(error)
    await maxihostApi.Teams.User.listTeams().catch(e => {
      expect(e).toBe(error)
    })
  })
})
