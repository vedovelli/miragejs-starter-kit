export default function routes(namespace = 'api') {
  this.namespace = namespace;
  this.get('/users', ({ users }) => users.all());
}
