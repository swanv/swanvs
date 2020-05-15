from app import db 
from app.api import bp
from flask import jsonify
from werkzeug.http import HTTP_STATUS_CODES

def error_response(status_code, message=None):
    '''定义 JSON 格式的错误信息'''
    payload = {'error': HTTP_STATUS_CODES.get(status_code, 'Unknow error')}
    if message:
        payload['message'] = message
    response = jsonify(payload)
    response.status_code = status_code
    return response


def bad_request(message):
    '''最常用的错误 400：错误的请求'''
    return error_response(400, message)

@bp.app_errorhandler(404)
def not_fond_error(error):
    return error_response(404)

@bp.app_errorhandler(505)
def internal_error(error):
    db.session.rollback()
    return error_response(505)