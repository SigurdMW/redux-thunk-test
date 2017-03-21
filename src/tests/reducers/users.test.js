import {
	users, 
	fetchDataPending,
	fetchDataError,
	repos
} from '../../reducers/users'

it('has a working users reducer', () => {
  expect(users).not.toBe(undefined)
});