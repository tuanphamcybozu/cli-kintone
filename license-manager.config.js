const { isMatchPackage } = require("@cybozu/license-manager");

const config = {
  analyze: {
    allowLicenses: [
      "MIT",
      "Apache-2.0",
      "BSD-2-Clause",
      "BSD-3-Clause",
      "ISC",
      "0BSD",
      "Python-2.0",
      "MPL-2.0",
      "CC0-1.0",
      "BSD-3-Clause OR MIT",
      "CC-BY-3.0",
      "CC-BY-4.0",
      "(BSD-3-Clause OR GPL-2.0)",
      "(MIT AND Zlib)",
      "(MIT AND BSD-3-Clause)",
      "(MIT AND CC-BY-3.0)",
      "(MIT OR CC0-1.0)",
      "(MIT OR WTFPL)",
      "BlueOak-1.0.0",
      "(BSD-2-Clause OR MIT OR Apache-2.0)",
    ],
    allowPackages: ["big-integer", "pause-stream", "map-stream"],
  },
  extract: {
    output: "./NOTICE",
    packageManager: "pnpm",
  },
  overrideLicense: (dep) => {
    for (const thirdParty of Object.keys(OVERRIDE_LICENSES)) {
      if (isMatchPackage(dep, thirdParty)) {
        return OVERRIDE_LICENSES[thirdParty];
      }
    }
    return undefined;
  },
  overrideLicenseText: (dep) => {
    for (const thirdParty of Object.keys(OVERRIDE_LICENSES_TEXT)) {
      if (isMatchPackage(dep, thirdParty)) {
        return OVERRIDE_LICENSES_TEXT[thirdParty];
      }
    }
    return undefined;
  },
};

// example for overriding Licenses
const OVERRIDE_LICENSES = {
  // "jsesc@0.5.0": "MIT", // https://github.com/mathiasbynens/jsesc/blob/v0.5.0/LICENSE-MIT.txt
  // "browser-assert@1.2.1": "MIT", // https://github.com/socialally/browser-assert/blob/v1.2.1/LICENSE
};

// example for override license text - extract command
const OVERRIDE_LICENSES_TEXT = {
  "https-proxy-agent@7.0.2": {
    licensePageUrl:
      "https://raw.githubusercontent.com/TooTallNate/proxy-agents/main/packages/https-proxy-agent/LICENSE",
  },
  "agent-base@7.1.0": {
    licensePageUrl:
      "https://raw.githubusercontent.com/TooTallNate/proxy-agents/main/packages/agent-base/LICENSE",
  },
  "through@2.3.8": {
    licensePageUrl:
      "https://raw.githubusercontent.com/dominictarr/through/master/LICENSE.MIT",
  },
};

module.exports = config;
