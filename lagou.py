import re

import requests

HEADERS = {
    'Referer': 'https://passport.lagou.com/login/login.html',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:51.0) Gecko/20100101 Firefox/51.0',
    'X-Requested-With': 'XMLHttpRequest'
}


def encryptPwd(passwd):
    # 对密码进行了md5双重加密
    passwd = hashlib.md5(passwd.encode('utf-8')).hexdigest()
    # veennike 这个值是在js文件找到的一个写死的值
    passwd = 'veenike' + passwd + 'veenike'
    passwd = hashlib.md5(passwd.encode('utf-8')).hexdigest()
    return passwd


def getTokenCode():
    login_page = 'https://passport.lagou.com/login/login.html'

    data = session.get(login_page, headers=HEADERS)

    return re.findall('X_Anti_Forge.*?=\s\'(.*?)\'', data.text)
session = requests.Session()
anti_token, anti_code = getTokenCode()
url = "https://passport.lagou.com/login/login.json"
payload = {
    'isValidate': 'true',
    'password': 'd05a5d2865083b6d4049918b9f8cdb2b',
    'request_form_verifyCode': '',
    'submit': '',
    'username': '17096701774',
}
headers = {
    'Origin': 'https://passport.lagou.com',
    'X-Anit-Forge-Code': anti_code,
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'X-Requested-With': 'XMLHttpRequest',
    'X-Anit-Forge-Token': anti_token,
    'DNT': '1',
    'Referer': 'https://passport.lagou.com/login/login.html',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,ko;q=0.8'
}
response = session.post(url, data=payload, headers=headers)
print(response.text)
