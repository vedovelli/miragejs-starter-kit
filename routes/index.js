/*
 * Mirage JS guide on Routes: https://miragejs.com/docs/route-handlers/functions
 */

export default function routes() {
  this.namespace = 'api';

  /*
   * A resource comprises all operations for a CRUD
   * operation. .get(), .post(), .put() and delete().
   * Mirage JS guide on Resource: https://miragejs.com/docs/route-handlers/shorthands#resource-helper
   */
  this.resource('users');
  this.resource('products');
}
