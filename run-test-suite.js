const childProcess = require('child_process');
const nodePath = require('path');
const express = require('express');

main();

async function main() {
  try {
    await run();
  } catch(e) {
    process.exit(1);
  }
}

async function run() {
  console.log('Getting React versions ...');

  const output = await exec('npm view react versions --json');
  const versions = JSON.parse(output);
  const supportedVersions = versions.filter(isSupported);
  const supportedMinorVersions = getLatestMinorVersions(supportedVersions);

  console.log('Done');
  console.log('Found React versions:', supportedMinorVersions);
  console.log('Starting server ...');

  const server = await startServer();

  console.log('Done');

  for (const i in supportedMinorVersions) {
    console.log('Installing React version', supportedMinorVersions[i], '...');

    await spawn('npm install react@' + supportedMinorVersions[i]);

    console.log('Done');
    console.log('Building ...');

    await spawn('npm run build');

    console.log('Done');
    console.log('Running tests ...');

    await spawn('npm run cypress');

    console.log('Done');
  }

  console.log('Stopping server ...');

  await stopServer(server);

  console.log('Done');
}

function isSupported(version) {
  const versionParts = version.split('.');

  return !(
    versionParts[2].includes('-') ||
    parseInt(versionParts[0]) < 16 ||
    (parseInt(versionParts[0]) == 16 && parseInt(versionParts[1]) < 3)
  );
}

function getLatestMinorVersions(versions) {
  const latestMinorVersions = {};

  versions.forEach((version) => {
    const versionParts = version.split('.');
    const minorVersion = [versionParts[0], versionParts[1], 0].join('.');
    latestMinorVersions[minorVersion] = version;
  });

  return Object.values(latestMinorVersions);
}

function exec(command) {
  return new Promise((resolve, reject) => {
    childProcess.exec(command, (error, stdout, stderr) => error ? reject(stderr) : resolve(stdout));
  });
}

function spawn(command) {
  return new Promise((resolve, reject) => {
    const commandParts = command.split(' ');
    const cmd = childProcess.spawn(commandParts.shift(), commandParts, {stdio: 'inherit'});
    cmd.on('exit', (code) => code !== 0 ? reject() : resolve());
  });
}

function startServer() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.static(nodePath.resolve('./build')));
    app.use((req, res) => res.sendFile(nodePath.resolve('./build/index.html')));
    resolve(app.listen(3000));
  });
}

function stopServer(server) {
  return new Promise((resolve) => {
    server.close(resolve);
  });
}
