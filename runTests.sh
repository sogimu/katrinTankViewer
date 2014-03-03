#!/bin/bash

phantomjs tests/run-qunit.js tests/index.html junit-xml
phantomjs tests/run-qunit.js tests/index.html junit-xml > testsResult.xml