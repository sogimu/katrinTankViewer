#!/bin/bash
PATH_TO_TESTS="./tests"

phantomjs --local-to-remote-url-access=true --web-security=false "$PATH_TO_TESTS"/run-qunit.js "$PATH_TO_TESTS"/index.html junit-xml
phantomjs --local-to-remote-url-access=true --web-security=false "$PATH_TO_TESTS"/run-qunit.js "$PATH_TO_TESTS"/index.html junit-xml > testsResult.xml