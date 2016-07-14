import createServer from '../lib/createServer';

const PORT = 8080;

createServer({
  port: PORT
}).then(() => {
  console.info('[DEV]server started on port', PORT);
}, err => {
  console.error('Could not start server :');
  console.error(err);
});
