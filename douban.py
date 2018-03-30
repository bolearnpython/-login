from urllib.request import urlretrieve

import requests
from bs4 import BeautifulSoup
url = 'https://accounts.douban.com/login'
datas = {'source': 'index_nav',
         'remember': 'on'}
headers = {'Host': 'www.douban.com',
           'Referer': 'https://www.douban.com/',
           'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:55.0) Gecko/20100101 Firefox/55.0',
           'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
           'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
           'Accept-Encoding': 'gzip, deflate, br'}


def get_captcha():
    '''
    获取验证码及其ID
    '''
    r = requests.post(url, data=datas, headers=headers)
    page = r.text
    soup = BeautifulSoup(page, "lxml")
    # 利用bs4获得验证码图片地址
    img_src = soup.find('img', {'id': 'captcha_image'}).get('src')
    urlretrieve(img_src, 'captcha.jpg')
    captcha = input('please input the captcha:')
    captcha_id = soup.find(
        'input', {'type': 'hidden', 'name': 'captcha-id'}).get('value')
    return captcha, captcha_id

session = requests.session()
url = "https://www.douban.com/accounts/login"
# captcha, captcha_id = get_captcha()
payload = {
    # 'captcha-id': captcha_id,
    # 'captcha-solution': captcha,
    'form_email': '1726448967@qq.com',
    'form_password': '199323bo',
    'source': 'index_nav',
}
headers = {
    'origin': "https://www.douban.com",
    'upgrade-insecure-requests': "1",
    'content-type': "application/x-www-form-urlencoded",
    'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36",
    'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    'dnt': "1",
    'referer': "https://www.douban.com/",
    'accept-encoding': "gzip, deflate, br",
    'accept-language': "zh-CN,zh;q=0.9,ko;q=0.8",
    'cookie': "ue=\"1726448967@qq.com\"",
    'cache-control': "no-cache",
}
response = session.post(url, data=payload, headers=headers)
print(session.cookies.get_dict())
