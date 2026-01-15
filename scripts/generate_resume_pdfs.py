#!/usr/bin/env python3
"""Generate PDF resumes from markdown files."""

import subprocess
import sys

def install_dependencies():
    """Install required packages if not present."""
    packages = ['markdown', 'weasyprint']
    for package in packages:
        try:
            __import__(package)
        except ImportError:
            print(f"Installing {package}...")
            subprocess.check_call([sys.executable, '-m', 'pip', 'install', package, '-q'])

install_dependencies()

import markdown
from weasyprint import HTML, CSS
from pathlib import Path

# Paths
BASE_DIR = Path(__file__).parent.parent
DOWNLOADS_DIR = Path.home() / "Downloads"
APPLICATIONS_DIR = BASE_DIR / "content" / "job-applications"

def get_all_resumes():
    """Find all resume.md files and generate output paths."""
    resumes = []
    for resume_path in APPLICATIONS_DIR.glob("*/resume.md"):
        app_name = resume_path.parent.name
        # Extract company from folder name (e.g., 2026-01-deloitte -> Deloitte)
        # Handle multi-part names like "paystack-mfb"
        parts = app_name.split("-")[2:]  # Skip year and month
        company = "_".join(p.title() for p in parts).replace("Mfb", "MFB")
        output_name = f"Emmanuel_Joseph_Resume_{company}.pdf"
        resumes.append({
            "input": resume_path,
            "output": DOWNLOADS_DIR / output_name,
        })
    return resumes

CSS_STYLES = """
@page {
    size: A4;
    margin: 0.7in 0.8in;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 10pt;
    line-height: 1.4;
    color: #1a1a1a;
}

h1 {
    font-size: 20pt;
    font-weight: 700;
    margin: 0 0 4pt 0;
    color: #000;
}

h2 {
    font-size: 11pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5pt;
    border-bottom: 1.5pt solid #333;
    padding-bottom: 3pt;
    margin: 14pt 0 8pt 0;
    color: #333;
}

h3 {
    font-size: 10pt;
    font-weight: 600;
    margin: 8pt 0 2pt 0;
}

p {
    margin: 0 0 6pt 0;
}

/* Contact line after name */
h1 + p {
    font-size: 9pt;
    color: #444;
    margin-bottom: 10pt;
}

strong {
    font-weight: 600;
}

em {
    font-style: italic;
    color: #555;
    font-size: 9pt;
}

ul {
    margin: 4pt 0 8pt 0;
    padding-left: 16pt;
}

li {
    margin-bottom: 3pt;
}

hr {
    border: none;
    margin: 10pt 0;
}

/* Job titles */
p > strong:first-child {
    color: #000;
}

/* Links */
a {
    color: #0066cc;
    text-decoration: none;
}
"""

def md_to_pdf(input_path: Path, output_path: Path):
    """Convert markdown file to PDF."""
    # Read markdown
    md_content = input_path.read_text(encoding='utf-8')

    # Convert to HTML
    html_content = markdown.markdown(md_content, extensions=['extra'])

    # Wrap in HTML document
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

    # Generate PDF
    HTML(string=full_html).write_pdf(
        output_path,
        stylesheets=[CSS(string=CSS_STYLES)]
    )

    print(f"✓ Generated: {output_path}")

def main():
    print("Generating PDF resumes...\n")

    resumes = get_all_resumes()
    if not resumes:
        print("No resume files found!")
        return

    for resume in resumes:
        input_path = resume["input"]
        output_path = resume["output"]

        if not input_path.exists():
            print(f"✗ Not found: {input_path}")
            continue

        md_to_pdf(input_path, output_path)

    print(f"\nPDFs saved to: {DOWNLOADS_DIR}")

if __name__ == "__main__":
    main()
