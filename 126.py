import re
import random
import requests
headers = {'Connection': 'keep-alive',
           'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.103 Safari/537.36'}
url = 'http://mail.126.com'
s = requests.Session()
s.get(url, headers=headers)
params = {
    'df': 'mail126_letter',
    'from': 'web',
    'funcid': 'loginone',
    'iframe': '1',
    'language': '-1',
    'passtype': '1',
    'product': 'mail126',
    'verifycookie': '-1',
    'net': 'failed',
    'style': '-1',
    'race': '-2_-2_-2_db',
    'uid': '17096701774@126.com',
    'hid': '10010102'
}

postdata = {
    'username': '17096701774@126.com',
    'url2': 'http://mail.126.com/errorpage/error126.htm',
    'savalogin': '1',
    'password': '199323'}

url = 'https://mail.126.com/entry/cgi/ntesdoor?'
login = s.post(url, headers=headers, data=postdata, params=params)
pa = r'href = "(.*?)"'
res = re.findall(pa, login.text)
index_page = s.get(res[0], headers=headers)
pa_index = r"('messageCount'.*?).*?('unreadMessageCount'.*?),"
res_index = re.findall(pa_index, index_page.text)
print(res_index)
