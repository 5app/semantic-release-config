# Semantic Release shareable config

[![Known Vulnerabilities](https://snyk.io/test/github/5app/semantic-release-config/badge.svg)](https://snyk.io/test/github/5app/semantic-release-config)
[![CircleCI](https://circleci.com/gh/5app/semantic-release-config.svg?style=shield)](https://circleci.com/gh/5app/semantic-release-config)

# Install

1. Create `.releaserc.json` file in directory, write into it:...

```json
{
	"extends": "@5app/semantic-release-config"
}
```

2. Install the dev dependency

```sh
npm i @5app/semantic-release-config
```

3. Add Job to CI pipeline

See `.circleci/config.yml` for example

```yml
release:
    executor: default
    steps:
        - checkout
        - node/install-packages
        - run: npx semantic-release
```

4. Grant @ci Team Privileges

In repo settings grant the CI user with write settings
