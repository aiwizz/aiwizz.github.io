#!/usr/bin/env python3
"""
Create placeholder images for browser logos
We'll create simple colored circles representing each browser
Actually, we'll use ImageMagick or other tools available
"""

import subprocess
import os

os.makedirs('images', exist_ok=True)

# Create simple colored PNG images using ImageMagick
# Chrome logo - colorful circle (red, green, yellow, blue)
subprocess.run([
    'convert', '-size', '128x128', 
    'xc:transparent',
    '-fill', '#4285F4', '-draw', 'circle 64,64 64,20',
    'images/chrome.png'
], check=False)

# Firefox logo - orange/red circle with white
subprocess.run([
    'convert', '-size', '128x128',
    'xc:transparent', 
    '-fill', '#FF7139', '-draw', 'circle 64,64 64,20',
    'images/firefox.png'
], check=False)

# Edge logo - blue and green gradient effect
subprocess.run([
    'convert', '-size', '128x128',
    'xc:transparent',
    '-fill', '#0078D7', '-draw', 'circle 64,64 64,20',
    'images/edge.png'
], check=False)

# Safari logo - compass (blue with green)
subprocess.run([
    'convert', '-size', '128x128',
    'xc:transparent',
    '-fill', '#06B6D4', '-draw', 'circle 64,64 64,20',
    'images/safari.png'
], check=False)

print("Image placeholders created")
