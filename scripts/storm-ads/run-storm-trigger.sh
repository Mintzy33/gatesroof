#!/bin/bash
cd /Users/alexchicilo/gatesroof/scripts/storm-ads
source .venv/bin/activate
echo "=== $(date) ===" >> storm-trigger.log
python storm-trigger.py >> storm-trigger.log 2>&1
