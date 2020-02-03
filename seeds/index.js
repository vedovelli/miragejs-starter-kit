/*
 * Mirage JS guide on Seeds: https://miragejs.com/docs/data-layer/factories#in-development
 */

const usersSeeder = server => {
  /*
   * This will create in the in memory DB 10 objects
   * of the Factory `user`. Moreover it creates a
   * random number of messages and assign to each
   * and every user, making use of relationships.
   */
  server.createList('user', 10).forEach(property => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    const messageIds = server.createList('message', randomNumber).map(message => message.id);
    property.messageIds = messageIds;
    property.save();
  });
};

export default function seeds(server) {
  server.loadFixtures();
  usersSeeder(server);
}
