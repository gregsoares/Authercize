import { faker } from '@faker-js/faker'

//randomize UUID for each profile
const staticProfileList = Array.from({ length: 500 }, () => ({
  uuid: faker.string.uuid(),
  name: `${faker.person.firstName()} ${faker.person.lastName()}`,
  email: faker.internet.email(),
  image: faker.image.avatar(),
}))

export default staticProfileList
