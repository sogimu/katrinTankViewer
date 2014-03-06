#!/bin/bash

PATH_TO_CODE="./sources"
PATH_TO_DOCS_FILE="./doc"

PATH_TO_JSDOC="./utils/jsdoc/jsdoc"
PATH_TO_SCRIPT="./utils/generateDocs.py"

python2.7 "$PATH_TO_SCRIPT" "$PATH_TO_CODE" "$PATH_TO_DOCS_FILE" "$PATH_TO_JSDOC"