#!/usr/bin/env python3
"""Convert resume markdown to PDF"""

import subprocess
import sys

def install_if_missing(package):
    try:
        __import__(package)
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", package, "-q"])

# Install dependencies
install_if_missing("markdown")
install_if_missing("weasyprint")

import markdown
from weasyprint import HTML, CSS
from pathlib import Path

# Read markdown
resume_path = Path(__file__).parent / "RESUME.md"
with open(resume_path, "r") as f:
    md_content = f.read()

# Convert to HTML
html_content = markdown.markdown(md_content, extensions=['tables'])

# Wrap in full HTML with styling
full_html = f"""
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body>
{html_content}
</body>
</html>
"""

# CSS for professional resume styling
css = CSS(string="""
    @page {{
        margin: 0.75in;
        size: letter;
    }}
    body {{
        font-family: 'Helvetica Neue', Arial, sans-serif;
        font-size: 10pt;
        line-height: 1.4;
        color: #333;
    }}
    h1 {{
        font-size: 22pt;
        margin-bottom: 2pt;
        color: #1a1a1a;
        border-bottom: none;
    }}
    h2 {{
        font-size: 12pt;
        margin-top: 14pt;
        margin-bottom: 6pt;
        color: #2c5282;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 3pt;
        text-transform: uppercase;
        letter-spacing: 0.5pt;
    }}
    h3 {{
        font-size: 10pt;
        margin-top: 8pt;
        margin-bottom: 2pt;
    }}
    p {{
        margin: 4pt 0;
    }}
    strong {{
        color: #1a1a1a;
    }}
    em {{
        color: #666;
    }}
    ul {{
        margin: 4pt 0;
        padding-left: 16pt;
    }}
    li {{
        margin: 2pt 0;
    }}
    hr {{
        border: none;
        border-top: 1px solid #e2e8f0;
        margin: 10pt 0;
    }}
    a {{
        color: #2c5282;
        text-decoration: none;
    }}
""")

# Output to Downloads
output_path = Path.home() / "Downloads" / "Emmanuel_Joseph_Resume_GiveDirectly.pdf"

# Generate PDF
HTML(string=full_html).write_pdf(output_path, stylesheets=[css])

print(f"PDF saved to: {output_path}")
