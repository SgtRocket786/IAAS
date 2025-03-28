from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from LLM.testFunctions import additionMethod

app = Flask(__name__)
CORS(app) # Enable CORS for all routes

# Sample api call format
@app.route('/llm/process', methods=['POST'])
def process_data():
    data = request.json
    num1 = data.get('num1')
    num2 = data.get('num2')

    if num1 is None or num2 is None:
        return jsonify({"error": "num1 and num2 are required"}), 400

    result = additionMethod(num1, num2)  # Call the addition function
    return jsonify({"message": "Processed successfully", "result": result})

if __name__ == '__main__':
    app.run(debug=True)