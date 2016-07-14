const html = `<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8' />
  <title>Koa-webpack</title>
</head>
<body>
  <div id="app" />
  <script src="/dist/bundle.js"></script>
</body>
</html>
`;

export default function view() {
  return html;
}
