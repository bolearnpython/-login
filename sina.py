#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-11-19 21:37:38
# @Author  : bo (bo17096701774@gmail.com)
# @Link    : https://github.com/bolearnpython
import requests
headers = {'Content-Type': 'application/x-www-form-urlencoded',
           'Origin': 'http://passport.weibo.cn',
           'Referer': 'http://passport.weibo.cn/signin/login?entry=mweibo&res=wel&wm=3349&r=http%3A%2F%2Fm.weibo.cn%2F%3F%26jumpfrom%3Dweibocom',
           'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.109 Safari/537.36', }
data = {'username': '17096701774',
        'password': '199323',
        'savestate': '1',
        'r': 'http://m.weibo.cn/?&jumpfrom=weibocom',
        'ec': '0',
        'pagerefer': 'http://passport.weibo.cn/signin/welcome?entry=mweibo&r=http%3A%2F%2Fm.weibo.cn%2F%3F%26jumpfrom%3Dweibocom',
        'entry': 'mweibo',
        'wentry': '',
        'loginfrom': '',
        'client_id': '',
        'code': '',
        'qq': '',
        'mainpageflag': '1',
        'hff': '',
        'hfp': '', }
s = requests.Session()
r = s.post('http://passport.weibo.cn/sso/login', headers=headers, data=data)
cookies = s.cookies.get_dict()
print(cookies)
