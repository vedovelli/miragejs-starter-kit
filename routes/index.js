export default function routes() {
  this.namespace = 'api';
  this.get('/users', ({ users }) => users.all());
  this.get('/products', ({ products }) => products.all());
}
