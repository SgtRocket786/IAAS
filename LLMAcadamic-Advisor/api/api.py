from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin  # <-- added cross_origin
import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from LLM.main_copy  import aggregate_and_generate_response
from LLM.main_copy import setup_environment

app = Flask(__name__)
CORS(app)

@app.route('/llm/generate-response', methods=['POST'])
def generate_graduation_plan():
    try:
        data = request.get_json()
        user_question = data.get('user_question', '')

        if not user_question:
            return jsonify({"error": "User question is required"}), 400

        result = aggregate_and_generate_response(user_question)

        return jsonify({"graduation_plan": result}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/llm/setup-environment', methods=['POST'])
def handle_setup_environment():
    if 'transcript' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    transcript = request
    try:
        # Call the actual setup_environment in main.py and pass the request object
        setup_environment(transcript)
        return jsonify({"message": "Environment setup successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)