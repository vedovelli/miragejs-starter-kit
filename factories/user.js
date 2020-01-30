import { Factory } from 'miragejs';
import faker from 'faker';

export default {
  user: Factory.extend({
    name() {
      return faker.fake('{{name.findName}}');
    },
    mobile() {
      return faker.fake('{{phone.phoneNumber}}');
    },
  }),
};
