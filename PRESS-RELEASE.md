# TreasureTrek
[![Build Status](https://travis-ci.org/Master-Sandwich/Master-Sandwich.svg?branch=master)](https://travis-ci.org/Master-Sandwich/Master-Sandwich)

>TreasureTrek is a geocaching game where users geotag a series of challenges to create a location-based adventure for other users. Collect points to be to top adventurer in your area.

## Team

  - __Product Owner__: Kyle Van Vleck
  - __Scrum Master__: Michael Daof
  - __Development Team Members__: Wes Young, Ali Bhatti

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

* Signup with email. Choose username and password.
* Three Main Sections
 * "All Adventures" shows all adventures except user's
 * "My Adventures" shows all adventures user has accepted from "All Adventures"
 * "Create Adventures" show list of adventures user has created and allows for user to create adventure

## Requirements

- see package.json for list of npm modules
- Xcode (for iOS development)

## Development

### Installing Dependencies

The client files currently live together with the server files, so you'll have to do an install for both projects.
From root directory:

```sh
$ npm install
$ cd TreasureTrek
$ npm install
```
You could very easily move TreasureTrek to it's own repo to and develop both independently.

### iOS Development
 React Native will launch Xcode's Simulator feature to do hot-reloading during development. From the ./TreasureTrek directory, run:
 ```sh
 $ react-native run-ios
 ```
 See React-Native [docs](https://facebook.github.io/react-native/)


### Tasks
See [dev docs](https://docs.google.com/spreadsheets/d/1Rxp2hkRO4Y3Itg9LEKWfJBauFICQugJCVr8Qtqydybs/edit#gid=1085523730) for feature roadmap.


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.