from flask import jsonify
from app.api import bp

@bp.route('/ping', methods=['GET'])
def ping():
    # 前端 vuejs 用于测试与后端 Flask 的联通性
    return jsonify('Pong')