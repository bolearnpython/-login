import requests,hashlib
name='17096701774'
password='199323'
md5 = hashlib.md5() 
md5.update(password.encode('utf-8'))
psw = md5.hexdigest()
agent='Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
s=requests.session()
headers={
	'Accept':'application/json, text/javascript, */*; q=0.01',
	'Connection':'keep-alive',
	'Accept-Encoding':'gzip, deflate',
	'Accept-Language':'zh-CN,zh;q=0.8',
	'Content-Length':'117',
	'Content-Type':'application/x-www-form-urlencoded',
	'Origin':'https://passport.liepin.com',
	'Cookie':'aa737353=dedc292d92602f5749f39d68b9769bdb',
	'X-Alt-Referer':'https://www.liepin.com/',
	'X-Requested-With':'XMLHttpRequest',
	'User-Agent':agent
	}
headers['Host']='passport.liepin.com'
headers['Referer']='https://passport.liepin.com/ajaxproxy.html'
url='https://passport.liepin.com/c/login.json?__mn__=user_login'
data={'layer_from':'wwwindex_rightbox_new',
'user_pwd':psw,#md5
'user_login':name,
'chk_remember_pwd':'on'}
r=s.post(url,data=data,headers=headers)
print(r.text)
