import time
import requests
from hashlib import sha1
import hmac
import time


def get_signal(time_stamp):
    """
    传入一个时间戳
    :param time_stamp:
    :return: signature
    """
    a = hmac.new("d1b964811afb40118a12068ff74a12f4".encode(),
                 digestmod=sha1)  # HMAC key
    a.update("password".encode())  # 固定字符串
    a.update("c3cef7c66a1843f8b3a9e6a1e3160e20".encode())  # clienId
    a.update("com.zhihu.web".encode())  # 固定字符串
    a.update(time_stamp.encode())  # timeStamp
    return a.hexdigest()
ID = 'c3cef7c66a1843f8b3a9e6a1e3160e20'
headers = {
    'accept': 'application/json, text/plain, */*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,ko;q=0.8',
    'authorization': 'oauth {ID}'.format(ID=ID),
    'Connection': 'keep-alive',
    'DNT': '1',
    'Host': 'www.zhihu.com',
    'If-None-Match': '"7eb4ebdc523b46e04c7fa978993f57f559d7ed8b"',
    'Referer': 'https://www.zhihu.com/question/55604797',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36'
}
url = 'https://www.zhihu.com/api/v3/oauth/captcha?lang=en'

r = requests.get(url, headers=headers)
cookies = r.cookies.get_dict()
print(cookies)

boundary = 'WebKitFormBoundaryCBv3kKytdqtzDTri'
time_stamp = str(int(time.time() * 1000))
signature = get_signal(time_stamp)
login_headers = {'accept': 'application/json, text/plain, */*',
                 'authorization': 'oauth {ID}'.format(ID=ID),
                 'Content-Type': 'multipart/form-data; boundary=----{boundary}'.format(boundary=boundary),
                 'Origin': 'https://www.zhihu.com',
                 'Referer': 'https://www.zhihu.com/question/55604797',
                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36'}
data = {
    'captcha': '',
    'client_id': ID,
    'grant_type': 'password',
    'lang': 'cn',
    'password': '199323',
    'ref_source': 'other_',
    'signature': signature,
    'source': 'com.zhihu.web',
    'timestamp': time_stamp,
    'username': '+8617096701774',
    'utm_source': ''
}
url = "https://www.zhihu.com/api/v3/oauth/sign_in"
r = requests.post(url, params=data, headers=login_headers, cookies=cookies)
cookies = r.cookies.get_dict()
print(cookies)
