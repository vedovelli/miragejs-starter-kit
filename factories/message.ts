/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
import { Factory } from 'miragejs';

/*
 * Faker Github repository: https://github.com/Marak/Faker.js#readme
 */
import { faker } from '@faker-js/faker';

export default {
  message: Factory.extend({
    content() {
      return faker.fake('{{lorem.paragraph}}');
    },
    date() {
      const date = new Date(faker.fake('{{date.past}}'));
      return date.toLocaleDateString();
    },
  }),
};
