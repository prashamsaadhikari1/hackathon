from flask import Flask, jsonify, request
from flask_cors import CORS
from data_generator import generate_pricing_data
import random
import time

app = Flask(__name__)
CORS(app)

# Authentication storage (use database in production)
users = {"admin@example.com": "admin123"}

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    if users.get(data['email']) == data['password']:
        return jsonify({"token": "fake-jwt-token", "status": "success"})
    return jsonify({"error": "Invalid credentials"}), 401

@app.route('/pricing-data')
def pricing_data():
    time.sleep(1)  # Simulate processing
    return jsonify(generate_pricing_data(10000))

@app.route('/social-trends')
def social_trends():
    trends = [
        {"hashtag": f"#trend{num}", "posts": random.randint(1000,100000)} 
        for num in range(50)
    ]
    return jsonify(sorted(trends, key=lambda x: x['posts'], reverse=True)[:10])

@app.route('/fraud-check', methods=['POST'])
def fraud_check():
    order = request.json
    fraud_signals = [
        order['amount'] > 10000,
        order['billing_country'] != order['shipping_country'],
        order['ip_address'].startswith('192')
    ]
    return jsonify({
        "is_fraud": any(fraud_signals),
        "signals": fraud_signals
    })

if __name__ == '__main__':
    app.run(port=5000)
