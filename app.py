from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/benefits')
def benefits():
    return render_template('benefits.html')

@app.route('/execution')
def execution():
    return render_template('execution.html')

@app.route('/pricing')
def pricing():
    return render_template('pricing.html')

app = app
if __name__ == '__main__':
    app.run(debug=True, port=5001)