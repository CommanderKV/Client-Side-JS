import os

def genIndex():
    with open(os.path.join(os.getcwd(), 'index.html'), 'w') as f:
        f.write("""<!doctype html>

<html>
    <body>
        <h1>Client side javascript</h1>
        <p>Client-Side-JS</p>
        <ul>
""")
        for root, _, files in os.walk('.'):
            for file in files:
                if (".git" not in root):
                    path = os.path.join(root, file)
                    f.write(f'\t\t\t<li><a href="{path}">{path[1:]}</a></li>\n')
        f.write('\t\t</ul>\n\t</body>\n</html>\n')

genIndex()