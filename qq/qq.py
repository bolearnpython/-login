# skey uin
#import requests
# regmaster:
import re
import furl
import requests
URL_PWD = "http://127.0.0.1:7788/"
URL_SIG = 'https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=522005705&daid=4&s_url=https://mail.qq.com/cgi-bin/login?vt=passport%26vm=wpt%26ft=loginpage%26target=&style=25'
URL = 'http://ptlogin2.qq.com/login?u=1726448967&verifycode=!NWL&pt_vcode_v1=0&pt_verifysession_v1=69eef146b657393153fe0fa9f3e54c8197574b41ecae7be0a302590155719893438e4677f45989763ff835f0fb992475103ab6d14b7a5e35&p=I9ljWHMYXot2gEIo*eKmsFhNX4PPqWDU78feB4hKP9hYMV0aVTiyLRW8c3KacxxLOQCizq94olVW4EE2n2SN1MN7h3Ba*y5k3e7Iar-gMPMmfoAlrJxUrJAEM8sfIhFrStclGoDbkeBPrBXVltU3ajnj3HiHJCR7ze41KCfktDMpv*a7ZWxwbNncAm6Tj17DNoM2AinaUKWIDT78zewGTM--F42JvC7R9f*IY*NVu9cschghiOD7K6msyALE2p1TZw0uwbvhQuFERzUdmMI40UGNCi1MccKG*3tY5n16Nx*GzWuj0Td-pLV00*zYhIpDRTyNCIEvoU1e237Ehc-gzg__&pt_randsalt=2&pt_jstoken=3051046272&u1=http%3A%2F%2Fwww.qq.com%2Fqq2012%2FloginSuccess.htm&ptredirect=0&h=1&t=1&g=1&from_ui=1&ptlang=2052&action=2-1-1509810727546&js_ver=10231&js_type=1&login_sig=AoyHRTVsePcaXa3VBScF*IuXwHl0pyCAoh2jrKfE7c0UT-QfYdzcf*zwEpXdHuSc&pt_uistyle=40&aid=636014201&'

login_sig = requests.get(URL_SIG).headers['Set-Cookie']
login_sig = re.findall(r'pt\_login\_sig=(.*?)\;', login_sig)[0]
URL_PRE = 'http://check.ptlogin2.qq.com/check?regmaster=&pt_tea=2&pt_vcode=1&uin=1726448967&appid=636014201&js_ver=10231&js_type=1&login_sig={login_sig}&u1=http%3A%2F%2Fwww.qq.com%2Fqq2012%2FloginSuccess.htm&r=0.5572867852674452&pt_uistyle=40'.format(
    login_sig=login_sig)
data = requests.get(URL_PRE).text.replace('ptui_checkVC', '')
_, verifycode, salt, pt_verifysession_v1, _ = eval(data)
data = {
    'a': 'yhnujm',
    'b': salt,
    'c': verifycode
}
response = requests.request("POST", URL_PWD, data=data)

f_url = furl.furl(URL)
f_url.args['verifycode'] = verifycode
f_url.args['pt_verifysession_v1'] = pt_verifysession_v1
f_url.args['p'] = response.text
f_url.args['login_sig'] = login_sig
url = f_url.url
headers = {'Host': 'ptlogin2.qq.com',
           'User-Agent': 'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.114 Mobile Safari/537.36', }
session = requests.Session()
response = session.get(url, headers=headers)
print(response.text)
