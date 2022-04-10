const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN = './main.mustache';

var args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Please enter a version number');
}

const pjsonServer = JSON.parse(fs.readFileSync('./components/package-server.json', 'utf8'));
const pjsonFrontend = JSON.parse(fs.readFileSync('./components/package-frontend.json', 'utf8'));
const pjsonFrontendComp = JSON.parse(fs.readFileSync('./components/package-frontend-comp.json', 'utf8'));

let DATA = {
  version: pjsonServer.version,
  frontendVersion: pjsonFrontend.version,
  frontendCompVersion: pjsonFrontendComp.version,
  date: new Date().toLocaleDateString('en-IL', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'Asia/Jerusalem',
  }),
};

function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN, (err, data) =>  {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}

function generateVersionsFile() {
    const output = {
      latest: pjsonServer.version,
      date: new Date().toISOString(),
      releases_link: "https://github.com/impleotv/stserver-release"
    };
    fs.writeFileSync('versions.json', JSON.stringify(output));
}

generateReadMe();
generateVersionsFile();