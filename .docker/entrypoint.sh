#!/bin/sh
set -e

# Start Nginx
exec nginx -g 'daemon off;'
