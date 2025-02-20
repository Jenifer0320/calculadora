from flask import Flask, jsonify
from flask_cors import CORS
import math as mt

app = Flask(__name__)
CORS(app)

@app.route("/suma/<float:numero1>/<float:numero2>")
def suma(numero1, numero2):
    resultado = numero1 + numero2
    data = {
        "Resultado": resultado,
        "Operacion": "suma",
    }
    return jsonify(data)

@app.route("/resta/<float:numero1>/<float:numero2>")
def resta(numero1, numero2):
    resultado = numero1 - numero2
    data = {
        "Resultado": resultado,
        "Operacion": "resta",
    }
    return jsonify(data)

@app.route("/multiplicacion/<float:numero1>/<float:numero2>")
def multiplicacion(numero1, numero2):
    resultado = numero1 * numero2
    data = {
        "Resultado": resultado,
        "Operacion": "multiplicacion",
    }
    return jsonify(data)

@app.route("/division/<float:numero1>/<float:numero2>")
def division(numero1, numero2):
    if numero2 == 0:
        return jsonify({
            "Error": "División por cero no permitida.",
        }), 400
    resultado = numero1 / numero2
    data = {
        "Resultado": resultado,
        "Operacion": "division",
    }
    return jsonify(data)

@app.route("/potenciacion/<float:numero1>/<float:numero2>")
def potenciacion(numero1, numero2):
    resultado = numero1 ** numero2
    data = {
        "Resultado": resultado,
        "Operacion": "potenciacion",
    }
    return jsonify(data)

@app.route("/seno/<float:numero>")
def seno(numero):
    resultado = mt.sin(numero)
    data = {
        "Resultado": resultado,
        "Operacion": "seno",
    }
    return jsonify(data)


@app.route("/coseno/<float:numero>")
def coseno(numero):
    resultado = mt.cos(numero)
    data = {
        "Resultado": resultado,
        "Operacion": "coseno",
    }
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
