import markdown
from pathlib import Path


markdown_file = "task-3.md"
html_file = "task-3.html"

with open(markdown_file, "r", encoding="utf-8") as md_file:
    markdown_content = md_file.read()

html_content = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Markdown to HTML</title>
</head>
<body>
{markdown.markdown(markdown_content)}
</body>
</html>
"""

with open(html_file, "w", encoding="utf-8") as html_file:
    html_file.write(html_content)

print(f"Converted {markdown_file} to {html_file.name}")
