// Determine the current browser name
const browserName = Cypress.browser.name;
// Define custom snapshots directories for different browsers
const browserSnapshotDirs = {
 electron: 'electron',
 chrome: 'chrome',
 firefox: 'firefox',
};
// Set the custom snapshots directory based on the current browser
const customSnapshotsDir = `cypress/snapshots/${browserSnapshotDirs[browserName]}`;

// Add the Match Image Snapshot command with the custom snapshots directory
addMatchImageSnapshotCommand({
 customSnapshotsDir,
});
