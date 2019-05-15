#!/bin/bash
set -ev

if [[ ${B_PHASE} = "heroku" ]]; then
	echo "Heroku Build";
fi