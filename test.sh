#!/bin/sh

[ "$1" = php ] && sh -c "php artisan test --coverage --coverage-html test-coverage/php"

[ "$1" = js ] && sh -c "bun run test"
