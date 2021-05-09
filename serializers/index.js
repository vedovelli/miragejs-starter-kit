/*
 * Mirage JS guide on Models: https://miragejs.com/docs/data-layer/models
 */

import { RestSerializer, JSONAPISerializer } from 'miragejs';

/*
 * The serialize changes  the response format.
 * RestSerializer is the default spec recommended to start by Mirage Documentation
 * JSONAPISerializer follows the JSON:API spec
 * Visit Mirage JS guide on Serializers: https://miragejs.com/docs/main-concepts/serializers/
 *
 * To change between specs just Replace 'RestSerializer.extend' to 'JSONAPISerializer.extend'
 */
const ApplicationSerializer = RestSerializer.extend({
  /**
   * When alwaysIncludeLinkageData is true all objects will include his children, recursively.
   * And the individuals include and embed property will be ignored.
   */
  alwaysIncludeLinkageData: false,
});

export default {
  application: ApplicationSerializer,

  /**
   * Include and embed options
   * include array: set which children of your object should be included in the object
   * embed boolean: When true the children will be placed inside of each object, when false they wil be placed in a new node.
   */
  user: ApplicationSerializer.extend({
    include: ['messages'],
    embed: true,
  }),

};
