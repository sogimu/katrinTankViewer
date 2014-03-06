#!/bin/bash

PATH_TO_JSON_FILE="./data/hotSpotsInfo.json"

PATH_TO_CIS_FILE="./data/ms_online5.cis"
PATH_TO_VRML_FILE="./data/MS.WRL"
PATH_TO_SCRIPT="./utils/cis+wrl2json.py"

python2.7 "$PATH_TO_SCRIPT" "$PATH_TO_CIS_FILE" "$PATH_TO_VRML_FILE" "$PATH_TO_JSON_FILE"