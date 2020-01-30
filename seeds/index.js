/*
 * Mirage JS guide on Seeds: https://miragejs.com/docs/data-layer/factories#in-development
 */

const usersSeeder = server => {
  /*
   * This will create in the in memory DB 10 objects
   * of the Factory `user`
   */
  server.createList('user', 10);
};

export default function seeds(server) {
  server.loadFixtures();
  usersSeeder(server);
}
