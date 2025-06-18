from faker import Faker
import random
import numpy as np

fake = Faker()

def generate_pricing_data(rows):
    data = []
    for _ in range(rows):
        data.append({
            "product_id": fake.uuid4(),
            "current_price": round(random.uniform(10, 1000), 2),
            "competitor_price": round(random.uniform(8, 950), 2),
            "demand_score": round(np.random.normal(0.5, 0.1), 2),
            "stock_level": random.randint(0, 500),
            "trend_score": round(random.uniform(0, 1), 2),
            "last_sale": fake.date_this_year()
        })
    return data

