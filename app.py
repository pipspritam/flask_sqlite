from flask import Flask, request, jsonify
import sqlite3

from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])


# SQLite database file
DB_FILE = 'employee_data.db'

def create_table():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()

    # Create a table if not exists
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS employee (
            empid TEXT PRIMARY KEY,
            empname TEXT NOT NULL,
            storage_size INTEGER NOT NULL,
            password VARCHAR(20) NOT NULL
        )
    ''')

    conn.commit()
    conn.close()

create_table()

@app.route('/add_employee', methods=['POST'])
def add_employee():
    try:
        data = request.get_json()
        empid = data['empid']
        empname = data['empname']
        storage_size = data['storage_size']
        password = data['password']

        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()

        cursor.execute('INSERT INTO employee (empid,empname,storage_size,password) VALUES (?, ?,?,?)', (empid, empname, storage_size, password))

        conn.commit()
        conn.close()

        return jsonify(data), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# @app.route('/modify_storage/<int:customer_id>', methods=['PUT'])
# def modify_storage(customer_id):
#     try:
#         data = request.get_json()
#         new_storage_size = data['storage_size']

#         conn = sqlite3.connect(DB_FILE)
#         cursor = conn.cursor()

#         # Update storage size for the specified customer
#         cursor.execute('UPDATE customers SET storage_size = ? WHERE id = ?', (new_storage_size, customer_id))

#         conn.commit()
#         conn.close()

#         return jsonify({'message': 'Storage size modified successfully'}), 200
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

@app.route('/show_all_employee', methods=['GET'])
def show_all_employee():
    try:
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()

        
        cursor.execute('SELECT * FROM employee')
        employees = cursor.fetchall()

        conn.close()

        employee_list = []
        for employee in employees:
            employee_dict = {'empid': employee[0], 'empname': employee[1], 'storage_size': employee[2]}
            employee_list.append(employee_dict)

        return jsonify(employee_list), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        empid = data['empid']
        password = data['password']

        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()

        # Retrieve employee data based on empid
        cursor.execute('SELECT * FROM employee WHERE empid = ?', (empid,))
        user_data = cursor.fetchone()

        conn.close()

        if user_data and user_data[3] == password:
            employee_details = {
                'empid': user_data[0],
                'empname': user_data[1],
                'storage_size': user_data[2],
                
            }
            return jsonify({'message': 'allow','employee': employee_details}), 200
        else:
            return jsonify({'message': 'Invalid empid or password'}), 401
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
