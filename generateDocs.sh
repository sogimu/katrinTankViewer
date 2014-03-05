#!/bin/bash

PATH_TO_CODE="./sources"
PATH_TO_JSDOC="./utils/jsdoc/jsdoc.js"
PATH_TO_DOCS_FILE="./doc"

python ./utils/generateDocs.py "$PATH_TO_CODE" "$PATH_TO_DOCS_FILE" "$PATH_TO_JSDOC"