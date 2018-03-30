import requests
import base64
account, password = '17096701774', '199323'
loginURL = "https://login.sina.com.cn/sso/login.php?client=ssologin.js(v1.4.15)"
username = base64.b64encode(account.encode("utf-8")).decode("utf-8")
postData = {
    "entry": "sso",
    "gateway": "1",
    "from": "null",
    "savestate": "30",
    "useticket": "0",
    "pagerefer": "",
    "vsnf": "1",
    "su": username,
    "service": "sso",
    "sp": password,
    "sr": "1440*900",
    "encoding": "UTF-8",
                "cdult": "3",
                "domain": "sina.com.cn",
                "prelt": "0",
                "returntype": "TEXT",
}
session = requests.Session()
r = session.post(loginURL, data=postData, verify=False)
a = session.cookies.get_dict()
cookies = {'SCF': a['SCF'], 'SUB': a['SUB']}
print(cookies)
