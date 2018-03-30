import re

import requests

url = "https://www.v2ex.com/signin"
Session = requests.Session()
headers = {
    'upgrade-insecure-requests': "1",
    'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36",
    'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    'dnt': "1",
    'accept-encoding': "gzip, deflate, br",
    'accept-language': "zh-CN,zh;q=0.9,ko;q=0.8",
    'cache-control': "no-cache",
}

response_pre = Session.get(url, headers=headers)

pre_list = re.findall(r'class="sl".*?name=\"(.*?)\"',
                      response_pre.text) + ['next', 'once']
once = re.findall(r'value=\"(\d+)\".*?name="once"', response_pre.text)[0]


url_captcha = "https://www.v2ex.com/_captcha"

querystring = {"once": once}

headers = {
    'upgrade-insecure-requests': "1",
    'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36",
    'x-devtools-emulate-network-conditions-client-id': "124b67b1-1a18-4701-95f6-c10af8b18f6c",
    'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    'dnt': "1",
    'accept-encoding': "gzip, deflate, br",
    'accept-language': "zh-CN,zh;q=0.9,ko;q=0.8",
    'cache-control': "no-cache",
}

response_captcha = Session.get(
    url_captcha, headers=headers, params=querystring)

with open('captcha.png', 'wb')as f:
    f.write(response_captcha.content)
captcha = input('请根据下载图片输入验证码：')

payload = dict(
    zip(pre_list, ['1726448967@qq.com', '199323', captcha, '/', once]))
headers = {
    'origin': "https://www.v2ex.com",
    'upgrade-insecure-requests': "1",
    'content-type': "application/x-www-form-urlencoded",
    'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36",
    'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    'dnt': "1",
    'referer': "https://www.v2ex.com/signin",
    'accept-encoding': "gzip, deflate, br",
    'accept-language': "zh-CN,zh;q=0.9,ko;q=0.8",
    'cache-control': "no-cache",
}
response = Session.post(url, data=payload, headers=headers)

print(Session.cookies.get_dict())
