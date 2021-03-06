#!/usr/bin/env python
from __future__ import absolute_import, unicode_literals

import os
import sys
import environ
env = environ.Env()
env.read_env('.env')

if __name__ == "__main__":
    if env('LOCAL', default=True):
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "proto_classified.settings.dev")
    else:
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "proto_classified.production")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
