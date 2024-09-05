#!/bin/sh
set -e

case "${NODE_ENV}" in
    development)
        echo "Running Development Server"
        exec pnpm run dev
        ;;
    test)
        echo "Running Test"
        exec pnpm run test
        ;;
    production)
        echo "Running Production Server"
        exec pnpm run start
        ;;
    *)
        echo "Unknown NODE environment: \"${NODE_ENV}\""
esac
