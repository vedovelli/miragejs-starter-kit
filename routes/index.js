export default function routes(n) {
  this.namespace = 'api';
  this.get('/users', ({ users }) => users.all());
}
